import styled from "@emotion/styled"
import Header from "./components/Header"
import Search from "./components/Search"
import UserInfo from "./components/UserInfo"
import { useEffect, useState } from "react"
import { fetchUser } from "./utils/request"
import { ThemesProvider, useThemes } from "./context/theme"
import useAsync from "./hooks"
function App() {
  const [username, setUsername] = useState("cyhfe")
  const {
    status,
    error,
    data,

    isIdle,
    isLoading,

    run,
  } = useAsync()

  useEffect(() => {
    // run(fetchUser(username))
  }, [username])

  return (
    <ThemesProvider>
      <StyledApp>
        <Header />
        <Search onSubmit={setUsername} />
        <UserInfo
          user={data}
          isLoading={isLoading}
          isIdle={isIdle}
          error={error}
        />
      </StyledApp>
    </ThemesProvider>
  )
}

const StyledApp = styled.div`
  color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  padding: 2rem;
`

export default App
