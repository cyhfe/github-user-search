import styled from "@emotion/styled"
import Header from "./components/Header"
import Search from "./components/Search"
import UserInfo from "./components/UserInfo"
import { useState } from "react"

import { ThemesProvider } from "./context/theme"

function App() {
  const [username, setUsername] = useState("getify")

  return (
    <ThemesProvider>
      <StyledApp>
        <Header />
        <Search onSubmit={setUsername} />
        <UserInfo username={username} />
      </StyledApp>
    </ThemesProvider>
  )
}

const StyledApp = styled.div`
  color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => props.theme.colors.background};
  transition: background 0.2s ease-in-out;

  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`

export default App
