/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { formatToLocalTime } from '../services/WeatherService'

function TimeAndLocation({Weather:{dt,timezone,name,country}}) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight my-3'>{formatToLocalTime(dt,timezone)}</p>
        </div>
        <div className='flex items-center justify-center my-3 '>
            <p className='text-white text-2xl font-medium'>{name},{country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation