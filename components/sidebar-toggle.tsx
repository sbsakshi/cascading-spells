"use client"
import { Menu } from "lucide-react"
import { useSidebar } from "./sidebar-provider"
import { Button } from "@/components/ui/button"

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/30 bg-amber-900"
    >
      <Menu className="h-5 w-5" />
    </Button>
  )
}
