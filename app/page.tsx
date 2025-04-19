"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Code, Layers, Layout, MagnetIcon, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import GridBackground from "@/components/grid-background"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Fix the AnimatedText component to handle the gradient text properly
// Replace the AnimatedText component with this improved version:

function AnimatedText({ text, className }: { text: string; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Split the text into two parts for different styling
  const firstPart = "Transforming CSS into"
  const secondPart = "Magical Spells"

  return (
    <h1 className={`${className} overflow-hidden`}>
      <span className="block md:inline">
        {firstPart.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500 transform text-white"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transitionDelay: `${wordIndex * 0.1 + charIndex * 0.03}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>{" "}
      <span className="block md:inline">
        {secondPart.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500 transform text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transitionDelay: `${wordIndex * 0.1 + 0.3 + charIndex * 0.03}s`,
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
    </h1>
  )
}

export default function SpellbookLanding() {
  const heroRef = useRef(null)
  const subheadingRef = useRef(null)
  const ctaRef = useRef(null)
  const featuresRef = useRef(null)
  const stepsRef = useRef(null)
  const finalCtaRef = useRef(null)

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline()

    heroTl.fromTo(".grid-lines", { opacity: 0 }, { opacity: 0.15, duration: 1.5, ease: "power2.inOut" })

    heroTl.fromTo(".tagline", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=1")

    // Animate the heading with a simple animation
    heroTl.fromTo(
      ".font-serif",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.4",
    )

    heroTl.fromTo(
      subheadingRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6",
    )

    heroTl.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4",
    )

    // Features animations
    gsap.fromTo(
      ".feature-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      },
    )

    // Steps animations
    gsap.fromTo(
      ".step-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 75%",
        },
      },
    )

    // Final CTA animation
    gsap.fromTo(
      finalCtaRef.current,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: finalCtaRef.current,
          start: "top 80%",
        },
      },
    )

    // Floating animation for magical elements
    gsap.to(".floating-element", {
      y: "random(-8, 8)",
      x: "random(-5, 5)",
      rotation: "random(-5, 5)",
      duration: "random(2, 4)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })

    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(".grid-lines")
      gsap.killTweensOf(".tagline")
      gsap.killTweensOf(".font-serif")
      gsap.killTweensOf(subheadingRef.current)
      gsap.killTweensOf(ctaRef.current)
      gsap.killTweensOf(".feature-card")
      gsap.killTweensOf(".step-item")
      gsap.killTweensOf(finalCtaRef.current)
      gsap.killTweensOf(".floating-element")
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070723] via-[#0D0D2D] to-[#0F0F35] text-[#E5E5E5] font-sans overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      >
        <GridBackground />

        <div className="z-10 max-w-5xl mx-auto px-4">
          <p className="tagline text-sm md:text-base uppercase tracking-[0.2em] text-purple-300/80 mb-6">
            Master CSS with Magical Metaphors
          </p>

          <AnimatedText
            text="Transforming CSS into Magical Spells"
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          />

          <p ref={subheadingRef} className="text-lg md:text-xl mb-12 text-[#E5E5E5]/70 max-w-2xl mx-auto">
            Learn complex CSS concepts through interactive, mystical experiences that make positioning, flexbox, and
            animations feel like casting powerful spells.
          </p>

          <div ref={ctaRef}>
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-[0_0_20px_rgba(149,76,233,0.5)] hover:shadow-[0_0_30px_rgba(149,76,233,0.7)] transition-all duration-300 group"
            onClick={ ()=>window.location.href = `/levels/1/1`}>
              <span>Begin Your Training</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Floating magical elements */}
        <div className="absolute top-1/4 left-1/5 w-12 h-12 floating-element">
          <div className="w-full h-full rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 shadow-[0_0_15px_rgba(149,76,233,0.3)]"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 floating-element">
          <div className="w-full h-full rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 shadow-[0_0_15px_rgba(76,149,233,0.3)]"></div>
        </div>
        <div className="absolute top-2/3 right-1/5 w-8 h-8 floating-element">
          <div className="w-full h-full rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 shadow-[0_0_15px_rgba(99,76,233,0.3)]"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Magical CSS Spells
          </h2>

          <p className="text-center text-lg text-[#E5E5E5]/70 mb-16 max-w-2xl mx-auto">
            Discover powerful CSS techniques reimagined as magical spells that transform your development abilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="feature-card bg-[#0A0A2A]/40 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 p-8 rounded-xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(149,76,233,0.15)] hover:-translate-y-1"
              >
                <div className="mb-6 text-purple-400 bg-purple-500/10 p-3 rounded-lg inline-block">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {feature.title}
                </h3>
                <p className="text-[#E5E5E5]/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A2A]/0 via-[#0A0A2A]/50 to-[#0A0A2A]/0 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            The Arcane Process
          </h2>

          <p className="text-center text-lg text-[#E5E5E5]/70 mb-16 max-w-2xl mx-auto">
            Follow these mystical steps to master the art of CSS spellcasting
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="step-item flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/80 to-indigo-600/80 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(149,76,233,0.3)] transform rotate-45">
                    <div className="transform -rotate-45">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-[#E5E5E5]/70 max-w-xs">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500/50 to-cyan-500/50"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 relative">
        <div
          ref={finalCtaRef}
          className="max-w-4xl mx-auto rounded-2xl p-12 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/20 shadow-[0_0_30px_rgba(149,76,233,0.15)]"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Ready to begin your arcane training?
          </h2>
          <p className="text-center text-lg mb-10 text-[#E5E5E5]/80 max-w-2xl mx-auto">
            Unlock the secrets of CSS positioning and transform your development skills into magical abilities that will
            set your projects apart.
          </p>
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-lg text-lg font-medium shadow-[0_0_20px_rgba(149,76,233,0.5)] hover:shadow-[0_0_30px_rgba(149,76,233,0.7)] transition-all duration-300 group">
              <span>Open the Spellbook</span>
              <Sparkles className="ml-2 h-5 w-5 transition-all duration-300 group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#E5E5E5]/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-[#E5E5E5]/60 text-sm">
          <p>© {new Date().getFullYear()} Sakshi Bansal • Master CSS with magical metaphors</p>
        </div>
      </footer>
    </div>
  )
}

// Data
const features = [
  {
    icon: <MagnetIcon size={32} />,
    title: "The Sticky Enchantment",
    description: "Master position: sticky to create elements that follow as you scroll through your magical interface.",
  },
  {
    icon: <Layout size={32} />,
    title: "The Flexbox Conjuring",
    description:
      "Bend layouts to your will with the powerful flexbox spell that aligns elements with mystical precision.",
  },
  {
    icon: <Layers size={32} />,
    title: "The Z-Index Levitation",
    description: "Control which elements float above others with z-index magic that creates depth in your designs.",
  },
  {
    icon: <Code size={32} />,
    title: "The Grid Summoning",
    description:
      "Create complex layouts with the mystical CSS grid incantation that organizes content in perfect harmony.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "The Transform Illusion",
    description:
      "Rotate, scale, and skew elements with transform spells that bring motion and dimension to your creations.",
  },
  {
    icon: <MagnetIcon size={32} />,
    title: "The Animation Potion",
    description:
      "Brew smooth animations with keyframes and transitions that breathe life into your magical interfaces.",
  },
]

const steps = [
  {
    icon: <MagnetIcon size={32} className="text-white" />,
    title: "Select a Spell",
    description: "Browse our grimoire of CSS spells and choose one to master for your next magical creation.",
  },
  {
    icon: <Code size={32} className="text-white" />,
    title: "Cast your CSS",
    description: "Write the incantation (code) guided by our mystical examples and interactive visualizations.",
  },
  {
    icon: <Sparkles size={32} className="text-white" />,
    title: "Watch the Magic",
    description: "See your spell take effect instantly with live previews that reveal the power of your new abilities.",
  },
]
