import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Countries() {
    const [countries,setcountries] = React.useState([])
    React.useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    return (
        <div>
            <h1>Countries</h1>
            <div className='d-flex h-100'>
                <div className='w-50 h-100 overflow-auto'>
                    <ul>
                        {
                            countries && countries.map((c,i)=>{
                                return <li key={i}>
                                    <Link to={`${c.alpha2Code}`}>{c.name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='w-50'>
                    <Outlet></Outlet>
                </div>
            </div>
            
            
        </div>
    )
}

export default Countries