import React, { useState } from 'react'
import Weather from './Weather';
import axios from 'axios';
import Wait from './Wait';
import NotFound from './NotFound';

const SearchBar = () => {

    // states

    const [weather, setWeather] = useState("")
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    // onchange to get input

    const onChange=(e)=>{
        setCity({...city,[e.target.name]:e.target.value})
    
      }

    // API URl

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=672b725f7ff9f8a0038e6e3e1eb57c21`
    

    //   To get weather informations after clicking search

    const getWeather = () => {
        setErr(false)
        setWeather('')
        setLoading(true)
        axios.get(url)
            .then((response) => {
                setErr(false)
                let newdata = response.data
                setWeather(newdata)
                setLoading(false)
            })
        .catch(()=> {
            setWeather('')
            setLoading(false)
            setErr(true)

        })

    }

    

    return (
        <>
        {/* Search bar design */}
            <div className="container my-5 d-flex justify-content-center " style={{marginTop:'50px'}}>
                <input type="text" style={{ border: "none" }} className="city w-50" name='city' id="city" onChange={onChange} placeholder="Enter City Name..." />
                <button className='mx-1' onClick={getWeather} style={{ backgroundColor: "#6500F2", color: 'white', border: "none" }}>Search</button>
            </div>

            {/* Logic for  Show and Hide Components  */}
            {weather? <Weather weather={weather} />: '' }
            {loading ?<Wait/>:''}
            {err? <NotFound/>: ''}
            

        </>


    )
}

export default SearchBar
