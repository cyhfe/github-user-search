/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { IconMoon, IconSun } from "./Icons"
function Header() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>devfinder</div>
      <div>
        <span>DARK</span>
        {<IconMoon />}
      </div>
    </div>
  )
}

export default Header
