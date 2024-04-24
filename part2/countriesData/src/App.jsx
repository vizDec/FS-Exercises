import { useEffect, useState } from 'react'
import countryServer from './services/countries'

import { SearchCountry } from './SearchCountry'
import { CountriesList } from './CountriesList'
import { CountryInfo } from './CountryInfo'

function App() {
  const [countries, setCountries] = useState([])
  const [countryCount, setCountryCount] = useState(null)
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    countryServer
      .getAllCountries()
      .then(response => setCountries(response))
  }, [])

  const countriesFilter = countries.filter(country => country.toLowerCase().includes(searchCountry.toLowerCase()))

  useEffect(() => {
    setCountryCount(countriesFilter.length)
  }, [countriesFilter])

  return (
    <>
      <h1>Find Countries</h1>

      <SearchCountry searchCountry={searchCountry} setSearchCountry={setSearchCountry} />

      {
          countryCount === 1 && countriesFilter.length === 1
            ? (<CountryInfo name={countriesFilter}/>)
            : countryCount <= 10 
                ? (<CountriesList countries={countriesFilter}/>)
                : (<p>Specify the country</p>)
      }
    </>
  )
}

export default App
