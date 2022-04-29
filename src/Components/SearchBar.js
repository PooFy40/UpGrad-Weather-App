import React from 'react'

const SearchBar = () => {
    return (
        
            <div className="container my-5 d-flex justify-content-center ">
                <input type="text" style={{border:"none"}} className="city w-50" id="city" placeholder="Enter City Name..."/>
                <button className='mx-1'  style={{backgroundColor:"#6500F2",color:'white',border:"none"}}>Search</button>
            </div>

        
    )
}

export default SearchBar
