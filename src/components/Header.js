/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
function Header() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>devfinder</div>
      <div>Light</div>
    </div>
  )
}

export default Header
