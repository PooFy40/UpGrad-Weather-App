import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import axios from 'axios';
import Wait from './Wait';
import NotFound from './NotFound';

const SearchBar = () => {

    const [weather, setWeather] = useState("")
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)

    const onChange=(e)=>{
        setCity({...city,[e.target.name]:e.target.value})
    
      }

    //   console.log(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=672b725f7ff9f8a0038e6e3e1eb57c21`
    // console.log(url);
    let waiting=false;
    let searching;
    let err=false

    const getWeather = () => {
        setLoading(true)
        axios.get(url)
            .then((response) => {
                let newdata = response.data
                setWeather(newdata)
                setLoading(false)
            })
        .catch(error=> console.error(`Error: ${error}`))

    }

    let maincontaint;
    if (weather) {

        maincontaint=<Weather weather={weather} />
    }

    return (
        <>
            <div className="container my-5 d-flex justify-content-center ">
                <input type="text" style={{ border: "none" }} className="city w-50" name='city' id="city" onChange={onChange} placeholder="Enter City Name..." />
                <button className='mx-1' onClick={getWeather} style={{ backgroundColor: "#6500F2", color: 'white', border: "none" }}>Search</button>
            </div>
            {err ? <NotFound/> : ""}
            {/* {!loading ? maincontaint:<Wait/>} */}
            

        </>


    )
}

export default SearchBar
