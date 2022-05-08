import React from 'react'
import Comments from './Comments';

const Weather = (props) => {
    
    //weekdays names
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //months names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // for current date
    var date=new Date()
    
    //sunrise time
    var date2 = new Date(props.weather.sys.sunrise * 1000);
    var hours = date2.getHours(); 
    var minutes = "0" + date2.getMinutes();
    var seconds = "0" + date2.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    //sunset time
    var date3 = new Date(props.weather.sys.sunset * 1000);
    var hours = date3.getHours();
    var minutes = "0" + date3.getMinutes();
    var seconds = "0" + date3.getSeconds();
    var formattedTime1 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


    // weather icon
    var iconurl = "http://openweathermap.org/img/w/" + props.weather.weather[0].icon + ".png";

    return (
        <>
        {/* Design of Weather Informations */}

            <div className='container' style={{ backgroundColor: 'white', height: '400px' }}>

                <p style={{ fontSize: 'larger' }}>{props.weather.name}, {props.weather.sys.country}, {weekday[date.getDay()]} {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</p>

                <div className='container d-flex flex-column justify-content-center' style={{ height: '300px',marginLeft:'100px' }}>
                    <b style={{ fontSize: '100px', color: '#505051' }}>{((props.weather.main.temp) - 273.15).toFixed(2)}°C <img style={{height:'100px',width:'100px'}} src={iconurl} /></b>
                    

                </div>

                <div className="container d-flex flex-row-reverse" style={{ marginTop: '-300px', marginLeft: '-200px', fontSize: 'larger' }}  >
                    <span>
                        Weather:<b>{props.weather.weather[0].main}</b> <br />
                        Wind: <b>{props.weather.wind.speed}km/hr</b><br />
                        <br />
                        Humidity: <b>{props.weather.main.humidity}%</b> <br />
                        Pressure: <b>{props.weather.main.pressure}Pa</b> <br />
                        <br />
                        Max Temp: <b>{parseInt((props.weather.main.temp_max) - 273.15)}°C</b> <br />
                        Min Temp:<b>{parseInt((props.weather.main.temp_min) - 273.15)}°C</b><br />
                        <br />
                        Sunrise: <b>{formattedTime}</b><br />
                        Sunset: <b>{formattedTime1}</b> <br />
                    </span>

                </div>


            </div>

            {/* Comment Box */}

            <Comments/>
        </>
    )
}

export default Weather
