/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { IconCompany, IconLocation, IconTwitter, IconWebsite } from "./Icons"

const user = {
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

function User() {
  return (
    <StyledCard>
      <StyledHeader>
        <div
          className="avatar-img"
          css={css`
            width: 120px;
            height: 120px;
            margin-right: 1rem;
          `}
        >
          <img
            src={user.avatar_url}
            alt="avatar"
            css={css`
              border-radius: 999px;
              object-fit: cover;
            `}
          />
        </div>
        <div>
          <h2
            css={css`
              margin: 0.5rem auto;
            `}
          >
            {user.name}
          </h2>
          <div>@{user.login}</div>
          <div>Joined {new Date(user.created_at).toLocaleDateString()}</div>
        </div>
      </StyledHeader>
      <div className="bio">{user.bio}</div>
      <StyledRepo>
        <div>
          <div>Repos</div>
          <div>{user.public_repos}</div>
        </div>
        <div>
          <div>Followers</div>
          <div>{user.followers}</div>
        </div>
        <div>
          <div>Following</div>
          <div>{user.following}</div>
        </div>
      </StyledRepo>
      <StyledInfo>
        <StyledInfoItem>
          <StyledIcon>
            <IconLocation />
          </StyledIcon>
          {user.location}
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledIcon>
            <IconWebsite />
          </StyledIcon>
          {user.blog}
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledIcon>
            <IconTwitter />
          </StyledIcon>
          {user.twitter_username}
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledIcon>
            <IconCompany />
          </StyledIcon>
          {user.company}
        </StyledInfoItem>
      </StyledInfo>
    </StyledCard>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundContent};
  padding: 2rem;
  border-radius: 18px;
`

const StyledRepo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 12px;
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StyledInfoItem = styled.div`
  display: flex;
  align-items: self-start;
  gap: 1rem;
`

const StyledIcon = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
`

export default User
