export async function fetchUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })

    const data = await response.json()

    if (response.ok) {
      return Promise.resolve(data)
    } else {
      Promise.reject(data)
    }
  } catch (error) {
    console.log(error)
  }
}
