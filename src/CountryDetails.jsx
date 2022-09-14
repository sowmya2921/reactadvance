import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails() {
    var params = useParams()
    const [country, setcountry] = React.useState({})
    React.useEffect(()=>{
        fetch(`https://restcountries.com/v2/alpha/${params.c}`)
        .then(res=>res.json())
        .then(data=>setcountry(data))
    },[params])
    return (
        <div>
            <h1>CountryDetails</h1>
            <h3>{country.name}</h3>
            <h3>{country.capital}</h3>
            <img src={country.flag} width="200px" alt="" />
        </div>
    )
}

export default CountryDetails