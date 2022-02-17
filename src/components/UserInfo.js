/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import User from "./User"
function UserInfo({ user, isLoading, error }) {
  return (
    <div>
      {isLoading && <div>loading...</div>}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {<User user={user} />}
    </div>
  )
}

function ErrorMessage({ children }) {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      {children}
    </div>
  )
}

export default UserInfo
