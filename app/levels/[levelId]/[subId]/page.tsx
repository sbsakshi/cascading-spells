"use client"
import { useParams } from "next/navigation"
import gameLevels from "@/app"
import Mirror from "@/components/Mirror"
import { SidebarProvider } from "@/components/sidebar-provider"
import { SidebarToggle } from "@/components/sidebar-toggle"

const Page = () => {
  const { levelId, subId } = useParams()

  // Find the level by its ID
  const level = gameLevels.find((l) => l.id.toString() === levelId)

  // If no level is found, display an error
  if (!level) {
    return <div>Level not found 😢</div>
  }

  const sub = level.subLevels.find((s) => s.id.toString() === subId) as (typeof level.subLevels)[number] & {
    checkFunction: (userCSS: string) => boolean | null
  }

  if (!sub) {
    return <div>Sublevel not found 😢</div>
  }

  // Process game levels to add UI-specific properties
  const processedLevels = gameLevels.map((level, levelIndex) => {
    // Determine level rating based on completed sublevels or other logic
    // This is just an example - adjust based on your actual game logic
    const rating = levelIndex === 0 ? 3 : 0

    return {
      ...level,
      rating,
      subLevels: level.subLevels.map((subLevel, subIndex) => {
        // Determine if sublevel is locked based on your game logic
        // This is just an example - adjust based on your actual game logic
        const isLocked =
          level.id === 1
            ? subIndex > 0
            : // For level 1, only first sublevel is unlocked
              true // All other levels are locked

        const isActive = level.id.toString() === levelId && subLevel.id.toString() === subId

        return {
          ...subLevel,
          isLocked,
          isActive,
        }
      }),
    }
  })

  // Calculate total progress
  const totalSubLevels = gameLevels.reduce((acc, level) => acc + level.subLevels.length, 0)
  const completedSubLevels = 0 // Replace with your actual progress tracking

  return (
    <SidebarProvider
      levels={processedLevels}
      currentLevel={{ levelId: Number(levelId), subId :Number(subId)}}
      totalProgress={{ completed: completedSubLevels, total: totalSubLevels }}
    >
      <div className="">
      <Mirror lesson={sub} level={{ levelId: Number(levelId), subId: Number(subId) }} />

        <div className="absolute top-0 m-2 z-10">
          <SidebarToggle />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Page
