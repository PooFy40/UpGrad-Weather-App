import React from 'react'

const Weather = () => {
    return (
        <>
            <div className='container' style={{ backgroundColor: 'white', height: '400px' }}>
                <p style={{ fontSize: 'larger' }}>city,country,day with date
                </p>

                <div className='container d-flex flex-column justify-content-center' style={{ height: '300px' }}>
                    <b style={{ fontSize: '100px', color: '#505051' }}>Temprature</b>
                </div>

                <div className="container d-flex flex-row-reverse" style={{ marginTop: '-300px', marginLeft: '-400px', fontSize: 'larger' }}  >
                    <span>
                        Weather: <br />
                        Wind:<br />
                        <br />
                        Humidity:<br />
                        Pressure:<br />
                        <br />
                        Max Temp:<br />
                        Min Temp:<br />
                        <br />
                        Sunrise:<br />
                        Sunset:<br />
                    </span>

                </div>


            </div>
            <div className="container my-3" style={{ backgroundColor: 'white', height: '400px' }}>

                <textarea className='my-3' rows="3" placeholder='Enter your comment here...' style={{ border: 'none', backgroundColor: '#EFE5FF', fontSize: 'larger', width: '100%' }} ></textarea>
                <button style={{ backgroundColor: '#6500F2', color: 'white' }}>Comment</button>
                <div className="container my-3 mb-3" style={{ backgroundColor: '#EFE5FF',  height: 'auto' }}>
                    <span style={{fontSize:'larger',fontWeight:'bolder',marginTop:'10px'}}>Comments(0)</span>
                </div>
            </div>
        </>
    )
}

export default Weather
