/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react"
import { createContext, useContext, useState } from "react"

const themes = {
  light: {
    colors: {
      colorHightlight: "black",
      color: "#4B6A9B",
      background: "#F6F8FF",
      backgroundContent: "#FEFEFE",
    },
  },
  dark: {
    colors: {
      colorHightlight: "white",
      color: "#f1f1f1",
      background: "#141D2F",
      backgroundContent: "#1E2A47",
    },
  },
}

// --lm-bg: #F6F8FF;
// --lm-bg-content: #FEFEFE;
// --lm-text: #4B6A9B;
// --lm-text-alt: #2B3442;
// --lm-shadow-active: 0px 4px 4px 0px rgba(0,0,0,0.25);
// --lm-shadow-inactive: 0px 16px 30px -10px rgba(0,0,0,0.2);
// --lm-icon-bg: brightness(100%);
// /* Btn */
// --btn: #0079FF;
// --btn-hover: #60ABFF;

const ThemesContext = createContext()

export function ThemesProvider({ children }) {
  const [theme, setTheme] = useState("dark")
  const value = [theme, setTheme]
  return (
    <ThemesContext.Provider value={value}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  )
}

export function useThemes() {
  return useContext(ThemesContext)
}
