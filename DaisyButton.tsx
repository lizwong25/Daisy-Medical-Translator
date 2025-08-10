"use client"

import { Button } from "@/components/ui/button"

interface DaisyButtonProps {
  isActive: boolean
  onToggle: () => void
}

export function DaisyButton({ isActive, onToggle }: DaisyButtonProps) {
  return (
    <Button
      onClick={onToggle}
      className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-0 border-0 bg-transparent hover:bg-transparent focus:bg-transparent"
      aria-pressed={isActive}
      aria-label={isActive ? "Stop translation" : "Start translation"}
    >
      <img
        src={isActive ? "/stop-button-daisy.svg" : "/start-button-daisy.svg"}
        alt={isActive ? "Stop" : "Start"}
        className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
      />
    </Button>
  )
}
