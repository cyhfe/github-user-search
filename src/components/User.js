/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { IconCompany, IconLocation, IconTwitter, IconWebsite } from "./Icons"

function User({ user }) {
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
          {user.location ?? "Not available"}
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledIcon>
            <IconWebsite />
          </StyledIcon>
          {user.blog ?? "Not available"}
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledIcon>
            <IconTwitter />
          </StyledIcon>
          {user.twitter_username ?? "Not available"}
        </StyledInfoItem>
        <StyledInfoItem>
          <StyledIcon>
            <IconCompany />
          </StyledIcon>
          {user.company ?? "Not available"}
        </StyledInfoItem>
      </StyledInfo>
    </StyledCard>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundContent};
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
`

const StyledRepo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  margin: 1.5rem auto;
  border-radius: 12px;
`

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StyledInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledIcon = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  filter: brightness(100%);
`

export default User
