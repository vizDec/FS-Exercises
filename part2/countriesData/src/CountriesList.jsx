const CountriesList = ({countries, showInfo}) => {
    return (
        <div>
            {
                countries.map(country => (
                    <p key={country}>{country}</p>
                ))
            }
        </div>
    )
}

export { CountriesList }