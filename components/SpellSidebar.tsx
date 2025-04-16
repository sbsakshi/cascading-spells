"use client"

import { useEffect, useState } from "react"
import { X, Star, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type GameLevel = {
  id: number
  title: string
  concept: string
  description: string
  icon: string
  subLevels: SubLevel[]
  rating?: number
}

export type SubLevel = {
  id: string
  title: string
  description: string
}

interface SpellSidebarProps {
  levels: GameLevel[]
  currentLevel: {
    levelId: number
    subId: number | string
  }
  totalProgress: {
    completed: number
    total: number
  }
  onClose?: () => void
}

export function SpellSidebar({ levels, currentLevel, totalProgress, onClose }: SpellSidebarProps) {
  const [progress, setProgress] = useState<Record<string, { cleared: boolean; stars: number }>>({})

  useEffect(() => {
    const raw = localStorage.getItem("gameProgress")
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        if (typeof parsed === "object" && parsed !== null) {
          setProgress(parsed)
        }
      } catch (err) {
        console.error("Invalid gameProgress in localStorage:", err)
      }
    }
  }, [])

  const flattened = levels.flatMap((lvl) =>
    lvl.subLevels.map((sub) => ({
      levelId: lvl.id,
      subId: sub.id.toString(),
    })),
  )

  const clearedIndices = flattened
    .map((item, idx) => (progress[`${item.levelId}-${item.subId}`]?.cleared ? idx : -1))
    .filter((i) => i !== -1)

  const lastClearedIndex = clearedIndices.length ? Math.max(...clearedIndices) : -1
  const nextLevelIndex = lastClearedIndex + 1
  const completedCount = Object.values(progress).filter((item) => item.cleared).length

  return (
    <div className="w-72 h-full bg-[#121212] border-r border-purple-900/50 text-purple-200 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-purple-900/50">
        <h1 className="text-2xl font-bold text-purple-300">Magical Spellbook</h1>
        <button onClick={onClose} className="text-purple-400 hover:text-purple-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {levels.map((level) => {
          const levelSubKeys = level.subLevels.map((sub) => `${level.id}-${sub.id}`)
          const completedSubLevels = levelSubKeys.filter((key) => progress[key]?.cleared)
          const levelRating =
            completedSubLevels.length > 0
              ? Math.round(
                  completedSubLevels.reduce((sum, key) => sum + (progress[key]?.stars || 0), 0) /
                    completedSubLevels.length,
                )
              : 0

          return (
            <div key={level.id} className="py-4 px-4 border-b border-purple-900/30">
              <h2 className="text-xl mb-2">{level.title}</h2>
              <div className="flex items-center mb-3">
                {/* <div className="flex">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < levelRating ? "fill-yellow-400 text-yellow-400" : "text-gray-600")}
                    />
                  ))}
                </div> */}
              </div>

              <div className="space-y-2">
                {level.subLevels.map((subLevel) => {
                  const key = `${level.id}-${subLevel.id.toString()}`
                  const isCleared = progress[key]?.cleared === true
                  const stars = progress[key]?.stars || 0

                  const flatIndex = flattened.findIndex(
                    (item) => item.levelId === level.id && item.subId === subLevel.id.toString(),
                  )

                  const isExactCurrent =
                    currentLevel.levelId === level.id &&
                    currentLevel.subId.toString() === subLevel.id.toString()

                  const isFirstLevel = level.id === 1 && subLevel.id.toString() === "1"
                  const isNext = flatIndex === nextLevelIndex
                  const isUnlocked = isCleared || isNext || isFirstLevel
                  const isCurrent = isExactCurrent

                  return (
                    <Link
                      key={subLevel.id}
                      href={isUnlocked ? `/levels/${level.id}/${subLevel.id}` : "#"}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-md",
                        isCurrent ? "bg-purple-900/70" : "hover:bg-purple-900/30",
                        !isUnlocked && "opacity-60 cursor-not-allowed",
                      )}
                    >
                      <div className="flex items-center">
                        {!isUnlocked ? (
                          <Lock className="h-5 w-5 mr-2 text-gray-500" />
                        ) : isCleared ? (
                          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        ) : (
                          <div
                            className={cn(
                              "h-5 w-5 rounded-full mr-2",
                              isCurrent ? "bg-purple-500" : "border-2 border-purple-500",
                            )}
                          />
                        )}
                        <span
                          className={cn(
                            !isUnlocked ? "text-gray-500" : isCleared ? "text-green-300" : "text-purple-100",
                          )}
                        >
                          {subLevel.title}
                        </span>
                      </div>

                      {isCleared && (
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <Star
                              key={i}
                              className={cn("h-4 w-4", i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-600")}
                            />
                          ))}
                        </div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4 border-t border-purple-900/50">
        <div className="flex justify-between mb-2">
          <span>Progress</span>
          <span>
            {completedCount}/{totalProgress.total}
          </span>
        </div>
        <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500"
            style={{
              width: `${(completedCount / totalProgress.total) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
