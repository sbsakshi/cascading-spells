"use client"
import { X, Star, Lock } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Types that match your database structure
export type GameLevel = {
  id: number
  title: string
  concept: string
  description: string
  icon: string
  subLevels: SubLevel[]
  rating?: number // Added for UI display
}

export type SubLevel = {
  id: string
  title: string
  description: string
  isLocked?: boolean // Added for UI display
  isActive?: boolean // Added for UI display
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
  return (
    <div className="w-72 h-full bg-[#121212] border-r border-purple-900/50 text-purple-200 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-purple-900/50">
        <h1 className="text-2xl font-bold text-purple-300">Magical Spellbook</h1>
        <button onClick={onClose} className="text-purple-400 hover:text-purple-200">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {levels.map((level) => (
          <div key={level.id} className="py-4 px-4 border-b border-purple-900/30">
            <h2 className="text-xl mb-2">{level.title}</h2>
            <div className="flex items-center mb-3">
              <div className="flex">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < (level.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-600",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {level.subLevels.map((subLevel) => {
                const isActive =
                  currentLevel.levelId === level.id && currentLevel.subId.toString() === subLevel.id.toString()
                const isLocked = subLevel.isLocked || false

                return (
                  <Link
                    key={subLevel.id}
                    href={isLocked ? "#" : `/levels/${level.id}/${subLevel.id}`}
                    className={cn(
                      "flex items-center p-3 rounded-md",
                      isActive ? "bg-purple-900/70" : "hover:bg-purple-900/30",
                      isLocked ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
                    )}
                  >
                    {isLocked ? (
                      <Lock className="h-5 w-5 mr-2 text-gray-500" />
                    ) : (
                      <div
                        className={cn(
                          "h-5 w-5 rounded-full mr-2",
                          isActive ? "bg-purple-500" : "border-2 border-purple-500",
                        )}
                      />
                    )}
                    <span className={cn(isLocked ? "text-gray-500" : "text-purple-100")}>{subLevel.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-purple-900/50">
        <div className="flex justify-between mb-2">
          <span>Progress</span>
          <span>
            {totalProgress.completed}/{totalProgress.total}
          </span>
        </div>
        <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500"
            style={{
              width: `${(totalProgress.completed / totalProgress.total) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
