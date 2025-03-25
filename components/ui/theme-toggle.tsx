"use client"; // ✅ Ensures this component runs on the client side

import { useTheme } from "next-themes"; // ✅ Theme hook from next-themes for dark/light mode switching
import { useEffect, useState } from "react"; // ✅ Import React hooks
import { Button } from "./button"; // ✅ Import custom Button component
import { Moon, Sun } from "lucide-react"; // ✅ Import Moon and Sun icons

// 🔹 ThemeToggle Component - Toggles between Light & Dark themes
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme(); // ✅ Get theme state and setter function
    const [mounted, setMounted] = useState(false); // ✅ Track if component has mounted (fixes hydration issues)
  
    // ✅ Ensure component has mounted before accessing theme (Fix for SSR mismatch)
    useEffect(() => {
      setMounted(true);
    }, []);
    
    return (
        mounted && ( // ✅ Render only after mounting to avoid hydration errors
            <Button
              variant="ghost" // ✅ Use a transparent button style
              size="sm" // ✅ Small-sized button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")} // ✅ Toggle theme on click
            >
              {/* 🔹 Show Moon icon in Light mode, Sun icon in Dark mode */}
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span> {/* ✅ Accessible label for screen readers */}
            </Button>
        )
    )
}
