function UserInfo({ user, isLoading, error }) {
  return (
    <div>
      {isLoading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {user && <div>{user.name}</div>}
    </div>
  )
}

export default UserInfo
