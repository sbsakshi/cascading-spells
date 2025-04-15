"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { SpellSidebar, type GameLevel } from "./SpellSidebar"

type SidebarContextType = {
  isOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  levels: GameLevel[]
  currentLevel: {
    levelId: number
    subId: number | string
  }
  totalProgress: {
    completed: number
    total: number
  }
}

export function SidebarProvider({ children, levels, currentLevel, totalProgress }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(true)

  const openSidebar = () => setIsOpen(true)
  const closeSidebar = () => setIsOpen(false)
  const toggleSidebar = () => setIsOpen((prev) => !prev)

  return (
    <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
      <div className="flex h-screen">
        {isOpen && (
          <SpellSidebar
            levels={levels}
            currentLevel={currentLevel}
            totalProgress={totalProgress}
            onClose={closeSidebar}
          />
        )}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </SidebarContext.Provider>
  )
}
