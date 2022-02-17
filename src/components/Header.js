/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { IconMoon, IconSun } from "./Icons"
import { useThemes } from "../context/theme"
function Header() {
  const [themes, setThemes] = useThemes()

  const theme = useTheme()

  const toggleTheme = () => {
    setThemes((theme) => (theme === "dark" ? "light" : "dark"))
  }

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background};
            transition: background 0.2s ease-in-out;
          }
        `}
      />
      <h1>devfinder</h1>
      <StyledToggleButton onClick={toggleTheme}>
        <span
          css={css`
            margin-right: 0.5rem;
          `}
        >
          {themes === "light" ? "DARK" : "LIGHT"}
        </span>
        {themes === "light" ? <IconMoon /> : <IconSun />}
      </StyledToggleButton>
    </div>
  )
}

const StyledToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export default Header
