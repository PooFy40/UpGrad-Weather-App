import React from 'react'

const Weather = (props) => {
    // console.log(props.weather);
    // console.log(props.weather.main.pressure);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = new Date()


    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date2 = new Date(props.weather.sys.sunrise * 1000);
    // Hours part from the timestamp
    var hours = date2.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date2.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date2.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(formattedTime);

     // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date3 = new Date(props.weather.sys.sunset * 1000);
    // Hours part from the timestamp
    var hours = date3.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date3.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date3.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime1 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(formattedTime1);

    var iconurl = "http://openweathermap.org/img/w/" + props.weather.weather[0].icon + ".png";
    // console.log(iconurl);

    return (
        <>
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
            <div className="container my-3" style={{ backgroundColor: 'white', height: '400px' }}>

                <textarea className='my-3' rows="3" placeholder='Enter your comment here...' style={{ border: 'none', backgroundColor: '#EFE5FF', fontSize: 'larger', width: '100%' }} ></textarea>
                <button style={{ backgroundColor: '#6500F2', color: 'white' }}>Comment</button>
                <div className="container my-3 mb-3" style={{ backgroundColor: '#EFE5FF', height: 'auto' }}>
                    <span style={{ fontSize: 'larger', fontWeight: 'bolder', marginTop: '10px' }}>Comments(0)</span>
                </div>
            </div>
        </>
    )
}

export default Weather
