import styled from "@emotion/styled"
import { useState } from "react"

function Search({ onSubmit }) {
  const [search, setSearch] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(search)
  }
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Search GitHub username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StyledButton type="submit" onClick={handleSubmit} value="Search" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.backgroundContent};
  border-radius: 12px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
`

const StyledInput = styled.input`
  border-radius: 12px;
  flex-grow: 1;
  padding: 18px;
  outline: none;
  border: 1px solid transparent;
  color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => props.theme.colors.backgroundContent};
`
const StyledButton = styled.input`
  cursor: pointer;
  min-width: 80px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #0079ff;
  color: white;
  margin: 10px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: #3290fc;
  }
`

export default Search
