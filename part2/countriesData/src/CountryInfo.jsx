import { useEffect, useState } from 'react'
import countryServer from './services/countries'

const CountryInfo = ({name}) => {
    const [country, setCountry] = useState({})
    
    useEffect(() => {
        countryServer
            .getCountry(name)
            .then(data => setCountry(data))
    }, [name])
    
    const languages = Object.entries(country.languages || {})

    return (
        <div>
            <h3>{country.name?.common}</h3>

            <h5>{country.capital}</h5>
            <h5>{country.area}</h5>

            <span>Languages</span>
            <ul>
                {
                    languages.map(([code, name]) => (
                        <li key={code}>{name}</li>
                    ))
                }
            </ul>

            <img src={country.flags?.png} alt={country.flags?.alt} />
        </div>
    )
}

export { CountryInfo }