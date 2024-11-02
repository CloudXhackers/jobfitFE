import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { Input, TextField } from "@mui/material"
const SearchBox = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  return (
    <div className="pb-6">
      <div className="border border-[0.2px] border-[#C7C7C7] hover:shadow-md hover:shadow-gray-400 shadow-md shadow-gray-200  p-[12px] py-1 rounded-full w-full flex justify-start gap-[0.5em] items-center ">
        <SearchIcon />

        <Input
          placeholder="Search Jobs, Companies, Roles ..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          fullWidth
          disableUnderline
          style={{
            width: "100%",
            height: 4,
            zIndex: "1",
          }}
        />
      </div>
      {/* <QueryListTable results={results} query={query} setQuery={setQuery}/> We will add these components later*/}
    </div>
  )
}

export default SearchBox
