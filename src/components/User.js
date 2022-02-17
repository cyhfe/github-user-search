import {
  IconCompany,
  IconLocation,
  IconMoon,
  IconSearch,
  IconSun,
  IconTwitter,
  IconWebsite,
} from "./Icons"

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
    <div>
      <div className="avatar">
        <div className="avatar-img">
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <div>{user.name}</div>
        <div>@{user.login}</div>
      </div>
      <div className="bio">{user.bio}</div>
      <div className="repo">
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
      </div>
      <div className="info">
        <div>
          <IconLocation />
          {user.location}
        </div>
        <div>
          <IconWebsite />
          {user.blog}
        </div>

        <div>
          <IconTwitter />
          {user.twitter_username}
        </div>
        <div>
          <IconCompany />
          {user.company}
        </div>
      </div>
    </div>
  )
}

export default User
