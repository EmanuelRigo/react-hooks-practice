// page for use-context hook practice
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//Provider
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "light"
            ? "bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center"
            : "bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

//Consumer
function ThemeToggler() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("ThemeToggler must be used within a ThemeProvider");

  const { theme, toggleTheme } = context;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">useContext Example</h1>
      <p className="mb-4">Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}

// 4️⃣ Componente principal
export default function UseContextExample() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}
