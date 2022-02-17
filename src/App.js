import Header from "./components/Header"
import Search from "./components/Search"
import UserInfo from "./components/UserInfo"
import { useEffect, useState } from "react"
import { fetchUser } from "./utils/request"
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
    run(fetchUser(username))
  }, [username])
  return (
    <div className="App">
      <Header />
      <Search onSubmit={setUsername} />
      <UserInfo
        user={data}
        isLoading={isLoading}
        isIdle={isIdle}
        error={error}
      />
    </div>
  )
}

export default App
