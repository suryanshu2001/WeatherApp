/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,

} from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherService'

function TemperatureDetails({Weather:{
  details,icon,temp,temp_min,temp_max,humidity,sunrise,sunset,speed,feels_like,timezone
}}) 
{
  return (
    <div>
      <div className='flex items-center justify-center text-xl text-cyan-300 py-6' >
        <p>{details}</p>
      </div>
      < div className='flex flex-row items-center justify-between py-3 text-white '>
        <img className='w-30' src={iconUrlFromCode(icon)} alt='weather'/>
        <p className='flex text-4xl'>{temp.toFixed()}°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className="mr-1"/>
            Real feel:
            <span className='font-medium ml-1'>{feels_like.toFixed()}°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className='font-medium ml-1'>{humidity.toFixed()}%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className="mr-1"/>
            Wind:
            <span className='font-medium ml-1'>{speed.toFixed()} kmph</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun className='font-light'/>
        Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
        <p className='font-light'>|</p>
        <UilSunset className='font-light'/>
        Sunset: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone, "hh:mm a")}</span>
        <p className='font-light'>|</p>
        <UilArrowUp className='font-light'/>
        High: <span className='font-medium ml-1'>{temp_max.toFixed()}°</span>
        <p className='font-light'>|</p>
        <UilArrowDown className='font-light'/>
        Low: <span className='font-medium ml-1'>{temp_min.toFixed()}°</span>
      </div>
      
    </div>
  )
}

export default TemperatureDetails