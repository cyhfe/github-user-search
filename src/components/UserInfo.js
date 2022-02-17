/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import User from "./User"
import { useEffect } from "react"
import { fetchUser } from "../utils/request"
import useAsync from "../hooks"
function UserInfo({ username }) {
  const {
    error,
    data: user,

    isLoading,
    safeDispatch,

    run,
  } = useAsync()

  useEffect(() => {
    run(fetchUser(username))
  }, [username, run])
  return (
    <div>
      {isLoading && <div>loading...</div>}
      {error && (
        <ErrorMessage dispatch={safeDispatch}>{error.message}</ErrorMessage>
      )}
      {user && <User user={user} />}
    </div>
  )
}

const getify = {
  login: "getify",
  id: 150330,
  node_id: "MDQ6VXNlcjE1MDMzMA==",
  avatar_url: "https://avatars.githubusercontent.com/u/150330?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/getify",
  html_url: "https://github.com/getify",
  followers_url: "https://api.github.com/users/getify/followers",
  following_url: "https://api.github.com/users/getify/following{/other_user}",
  gists_url: "https://api.github.com/users/getify/gists{/gist_id}",
  starred_url: "https://api.github.com/users/getify/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/getify/subscriptions",
  organizations_url: "https://api.github.com/users/getify/orgs",
  repos_url: "https://api.github.com/users/getify/repos",
  events_url: "https://api.github.com/users/getify/events{/privacy}",
  received_events_url: "https://api.github.com/users/getify/received_events",
  type: "User",
  site_admin: false,
  name: "Kyle Simpson",
  company: "Getify Solutions",
  blog: "http://getify.me",
  location: "Austin, TX",
  email: null,
  hireable: true,
  bio: "I like to explore JS and FP techniques. Helping build a culture of engineering excellence for my employer.",
  twitter_username: null,
  public_repos: 59,
  public_gists: 388,
  followers: 34195,
  following: 2,
  created_at: "2009-11-08T06:56:21Z",
  updated_at: "2022-02-17T00:10:11Z",
}

function ErrorMessage({ dispatch, children }) {
  const handleSetUser = () => {
    dispatch({ type: "resolve", payload: getify })
  }
  return (
    <div
      css={css`
        color: red;
      `}
    >
      {children}
      <div>
        <button onClick={handleSetUser}>点我获取静态数据</button>
      </div>
    </div>
  )
}

export default UserInfo
