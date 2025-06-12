import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDark,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-sm 
                 hover:bg-white/30 transition-all duration-300 border border-white/20
                 shadow-lg hover:shadow-xl transform hover:scale-110"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-slate-700" />
      )}
    </button>
  );
};
