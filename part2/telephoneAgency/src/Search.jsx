import React from 'react'

const Search = ({search, setSearch}) => {    
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <input placeholder='Search' value={search} onChange={onChange}/>
    )
}

export { Search }