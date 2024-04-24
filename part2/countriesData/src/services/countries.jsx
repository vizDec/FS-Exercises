import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAllCountries = () => {
    return axios
        .get(`${baseUrl}all`)
        .then(response => response.data)
        .then(countries => countries.map(country => country.name.common))
}

const getCountry = (name) => {
    return axios
        .get(`${baseUrl}name/${name}`)
        .then(country => country.data)
}

export default { getAllCountries, getCountry }