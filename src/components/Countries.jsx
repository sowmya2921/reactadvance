import React from 'react'
import { connect } from 'react-redux'
import { getAllCountries } from '../store/actions'

function Countries({countries:{countries},dispatch}) {
    console.log(countries)
    React.useEffect(()=>{
        dispatch(getAllCountries())
    },[])
    return (
        <div className='d-flex flex-wrap justify-content-between'>
            {
                countries.map((country)=>{
                    return(
                        <div className='w-20 m-2 border p-2'>
                            <h4>{country.name}</h4>
                            <img src={country.flag} style={{width:'200px'}} alt="" />
                        </div> 
                    ) 
                })
            }
        </div>
    )
}

export default connect(store=>store)(Countries)