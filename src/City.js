import React from 'react'

const City = ({city}) => {
  return (
    <div>
        <h1 className='text-5xl mb-4'>{city.main.temp} °C</h1> 
        <h1 className='text-3xl mb-2'>{city.name}</h1>
        <h1 className='text-2xl mb-2'>{city.weather[0].main}</h1>
    </div>
  )
}

export default City
