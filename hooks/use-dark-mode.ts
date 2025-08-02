"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function useDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolvedTheme for more accurate detection, fallback to theme
  const isDarkMode = mounted ? (resolvedTheme === "dark" || theme === "dark") : false

  const toggleDarkMode = () => {
    if (mounted) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
  }

  return { isDarkMode, toggleDarkMode, mounted }
}
