import React from 'react'

const SearchCountry = ({ SearchCountry, setSearchCountry}) => {

    const changeCountry = (e) => {
        setSearchCountry(e.target.value)
    }

  return (
    <input type="text" value={SearchCountry} onChange={changeCountry}/>
  )
}

export { SearchCountry }