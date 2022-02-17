import { useState } from "react"

function Search({ onSubmit }) {
  const [search, setSearch] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(search)
    setSearch("")
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" onClick={handleSubmit} value="Search" />
      </form>
    </div>
  )
}

export default Search
