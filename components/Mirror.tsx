'use client';

import React, { useState,useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { EditorView } from '@codemirror/view';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { init } from 'next/dist/compiled/webpack/webpack';
import { Sparkles, Lightbulb, CheckCircle2, BookOpen, ChevronRight, Star, Wand2, Lock } from "lucide-react"
import { useRouter } from 'next/router';
import gameLevels from '@/app';
import { SidebarToggle } from './sidebar-toggle';

type CheckFunction = (userCSS: string) => boolean | null;


type lesson={
    id: string;
    title: string;
    description: string;
    challenge: string;
    hint1: string;
    hint2: string;
    successMessage: string;
    failMessage: string;
    fixedHTML: string;
    fixedCSS: string;
    initialUserCSS: string;
  checkFunction: CheckFunction;
  lesson: string;
}

type level={
  levelId:number,
  subId:number
}


export default function Mirror({ lesson,level }: { lesson: lesson ,level:level}) {
  const [hintLevel, setHintLevel] = useState(0)
  const [fixedCSS, setfixedCSS] = useState(lesson.fixedCSS)
  const [userCSS, setUserCSS] = useState(lesson.initialUserCSS)
  const [origin, setOrigin] = useState("")
  const [isSpellCasting, setIsSpellCasting] = useState(false)
  const [showFlames, setShowFlames] = useState(false)
  const [scrollMessage, setScrollMessage] = useState({ title: "", message: "" })
  const [starRatings, setStarRatings] = useState<{ [key: string]: number }>({})
  const [attempts, setAttempts] = useState<{ [key: string]: number }>({})
  const [showScroll, setShowScroll] = useState(false)

  const getNextHint = () => {
    if (hintLevel < 2) {
      const currentStars = starRatings[lesson.id] || 3
      if (currentStars > 0) {
        setStarRatings({
          ...starRatings,
          [lesson.id]: currentStars - 1,
        })
      }
      setHintLevel((prev) => Math.min(prev + 1, 2))
    }
  }

  const renderHint = () => {
    switch (hintLevel) {
      case 0:
        return null
      case 1:
        return (
          <div className="mt-3 p-3 bg-amber-900/30 rounded-lg border border-amber-600/30 text-amber-200">
            <p className="text-sm italic">{lesson.hint1}</p>
          </div>
        )
      case 2:
        return (
          <div className="mt-3 p-3 bg-amber-900/30 rounded-lg border border-amber-600/30 text-amber-200">
            <p className="text-sm italic">{lesson.hint2}</p>
          </div>
        )
      default:
        return null
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin)
    }
  }, [])

  const castFlameSpell = () => {
    setIsSpellCasting(true)
    setShowFlames(true)

    setTimeout(() => {
      setIsSpellCasting(false)

      setTimeout(() => {
        setShowFlames(false)
      }, 2500)
    }, 300)
  }

  const checkSpell = () => {
    castFlameSpell()

    setTimeout(() => {
      const isSuccess = lesson.checkFunction(userCSS)

      // Track attempts for this sublevel
      const currentAttempts = attempts[lesson.id] || 0
      setAttempts({
        ...attempts,
        [lesson.id]: currentAttempts + 1,
      })

      if (isSuccess) {
        // Success message
        setScrollMessage({
          title: "Enchantment Successful!",
          message: lesson.successMessage,
        })

        if (!starRatings[lesson.id]) {
          const hintsUsed = hintLevel
          const failedAttempts = currentAttempts
          const starsLost = hintsUsed + failedAttempts
          const finalStars = Math.max(0, 3 - starsLost)

          setStarRatings({
            ...starRatings,
            [lesson.id]: finalStars,
          })
        }
      } else {
        // Failure message
        setScrollMessage({
          title: "Spell Fizzled",
          message: lesson.failMessage,
        })

        // Decrease star rating on incorrect answer
        const currentStars = starRatings[lesson.id] || 3
        if (currentStars > 0) {
          setStarRatings({
            ...starRatings,
            [lesson.id]: currentStars - 1,
          })
        }
      }
      setShowScroll(true)
    }, 800)
  }

  const renderStars = (count: number) => {
    return (
      <div className="flex">
        {[...Array(3)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />
        ))}
      </div>
    )
  }

  const nextLevel=()=>{
    if (level.subId+1<gameLevels[level.levelId].subLevels.length ){
      const nextSubId = level.subId + 1
      window.location.href = `/levels/${level.levelId}/${nextSubId}`
    }else{
      window.location.href = `/levels/${level.levelId+1}/1`
    }
  }


  useEffect(() => {
    if (!(lesson.id in starRatings)) {
      setStarRatings({
        ...starRatings,
        [lesson.id]: 3,
      })
    }
  }, [lesson.id])

  const fixedHTML = lesson.fixedHTML
  console.log(fixedHTML)
  const previewDoc = ` <html>
      <head>
          <base href="${origin}/">
        <style>
          ${userCSS}
          ${fixedCSS}
        </style>
      </head>
      <body>
       ${fixedHTML}
       
      </body>
    </html>`
  console.log(previewDoc)

  return (
    <div className="relative grid grid-cols-2 gap-6 p-6 min-h-screen bg-black text-white">
      <Image src="/castle.png" alt="castle" fill className="absolute object-cover opacity-20 z-0" />

      {/* Flame effect overlay */}
      {showFlames && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="flame-container">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="flame-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${30 + Math.random() * 50}px`,
                  height: `${40 + Math.random() * 60}px`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Scroll Popup */}
      {showScroll && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="ancient-scroll">
            <div className="scroll-content">
              <button
                onClick={() => setShowScroll(false)}
                className="absolute top-4 right-4 text-amber-800 hover:text-amber-600 transition-colors"
              >
                <span className="sr-only">Close</span>
                <span aria-hidden>×</span>
              </button>
              <h3 className="text-2xl font-[Luminari,fantasy] text-amber-800 mb-4">{scrollMessage.title}</h3>
              <p className="text-amber-900 mb-6 font-[Luminari,fantasy]">{scrollMessage.message}</p>

              {scrollMessage.title.includes("Successful") && (
                <div className="mb-6 text-center">
                  <h4 className="text-amber-800 mb-2 font-[Luminari,fantasy]">Stars Earned:</h4>
                  <div className="flex justify-center">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-8 w-8 mx-1 ${
                          i < (starRatings[lesson.id] || 0) ? "text-yellow-500 fill-yellow-500" : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => nextLevel()
                  }
                  className="px-4 py-2 bg-amber-800 text-amber-50 rounded-md hover:bg-amber-700 transition-colors font-[Luminari,fantasy] transform hover:scale-105 active:scale-95"
                >
                  Continue Spellcasting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-4 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-300 font-quicksand">💅 Cast Your CSS Spell</h2>
          
          </div>
        </div>
        
        <div className="opacity-90 rounded border border-purple-900/30">
          <CodeMirror
            value={userCSS}
            height="300px"
            extensions={[css()]}
            onChange={(value) => setUserCSS(value)}
            theme={tokyoNight}
          />
        </div>

        <div className="opacity-90 mt-4 rounded border border-purple-900/30">
          <CodeMirror
            value={fixedHTML}
            height="100px"
            extensions={[html(), EditorView.editable.of(false)]}
            theme={tokyoNight}
          />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            className={`relative flex-1 px-6 py-3 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white rounded-lg font-medium text-lg transition-all duration-200 shadow-lg shadow-purple-900/30 overflow-hidden font-[Luminari,fantasy] transform hover:scale-105 active:scale-95 ${isSpellCasting ? "transform scale-95" : ""}`}
            onClick={checkSpell}
            disabled={isSpellCasting}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Sparkles className="mr-2 h-5 w-5 text-amber-300" />
              Cast Thy Spell
            </span>
            <span
              className={`absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-600 opacity-0 transition-opacity duration-300 ${isSpellCasting ? "opacity-30" : ""}`}
            ></span>
          </button>

          <button
            className="relative px-4 py-3 bg-amber-900/50 hover:bg-amber-800/60 text-amber-200 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-amber-900/20 font-[Luminari,fantasy] transform hover:scale-105 active:scale-95"
            onClick={getNextHint}
            disabled={hintLevel >= 2}
          >
            <span className="flex items-center justify-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              {hintLevel === 0 ? "Seek Guidance" : "Next Hint"}
            </span>
          </button>
        </div>
      </div>

      <div className="z-10 flex flex-col gap-6">
        <Card className="bg-zinc-900/80 border border-purple-800/10">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 font-quicksand flex justify-between">
              <h1>🧙 Challenge:{lesson.title} </h1>
            <span className="flex items-center bg-zinc-900/80 px-3 py-1 rounded-full">
              {renderStars(starRatings[lesson.id] || 3)}
            </span>
            </CardTitle>
            <CardDescription className="text-gray-300">{lesson.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-800/80 rounded-lg p-4 border border-purple-900/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">📜</span>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-1">The Curse</h3>
                  <p className="text-gray-300 italic">{lesson.challenge}</p>
                  <div className="mt-3 text-sm text-purple-300">
                    {renderHint()}

                    <span className="ml-2 text-white"></span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="z-5">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">🔮 Live Enchanted Preview</h2>
          <iframe
            srcDoc={previewDoc}
            className="w-full h-[300px] border border-purple-900/30 rounded-lg bg-black z-10"
            sandbox="allow-same-origin"
          ></iframe>
        </div>
      </div>

      {/* Custom CSS for flame animation and scroll */}
      <style jsx global>{`
        @keyframes flameRise {
          0% {
            transform: translateY(100px) scale(0.3);
            opacity: 0.8;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-300px) scale(0.7);
            opacity: 0;
          }
        }
        
        .flame-container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100vh;
          pointer-events: none;
        }
        
        .flame-particle {
          position: absolute;
          bottom: -20px;
          width: 60px;
          height: 80px;
          border-radius: 50% 0 50% 50%;
          background: radial-gradient(circle at 60% 40%, #ff9d00, #ff5722);
          transform: rotate(45deg);
          filter: blur(8px);
          animation: flameRise 3s ease-out forwards;
          opacity: 0.8;
          box-shadow: 0 0 20px 10px rgba(255, 87, 34, 0.4);
        }
        
        /* Ancient Scroll Styling */
        .ancient-scroll {
          width: 90%;
          max-width: 600px;
          height: auto;
          background-color: #f2e8c9; /* Parchment color */
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(139, 69, 69, 0.6);
          position: relative;
          padding: 20px;
          transform: translateY(-20px);
          animation: scrollAppear 0.5s forwards;
        }
        
        @keyframes scrollAppear {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .scroll-content {
          background-color: #f2e8c9;
          padding: 30px;
          border-radius: 8px;
          position: relative;
          color: #5c3d2e;
          font-family: 'Luminari', fantasy;
          background-image: 
            linear-gradient(90deg, rgba(139, 69, 69, 0.1) 1px, transparent 1px),
            linear-gradient(#f2e8c9 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .scroll-content::before,
        .scroll-content::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 30px;
          background-image: 
            radial-gradient(circle, rgba(139, 69, 69, 0.2) 1px, transparent 1px);
          background-size: 15px 15px;
        }
        
        .scroll-content::before {
          top: 0;
          left: 0;
        }
        
        .scroll-content::after {
          bottom: 0;
          left: 0;
        }
        
        /* Star animation when stars are lost */
        .star-lost {
          animation: starLost 0.5s ease-in-out;
        }

        @keyframes starLost {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
