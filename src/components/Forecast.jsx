/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import { iconUrlFromCode } from '../services/WeatherService'

function Forecast({title,items}) {
  return (
    <div>
        <div className='flex item-center justify-start my-6'>
            <p className='font-medium text-white uppercase'>
                {title}
            </p>
        </div>
        <hr className='mt-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            {items.map(item => (
                <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {item.title}
                </p>
                <img className='w-16 my-1' src={iconUrlFromCode(item.icon)} alt='weather'/>
                <p className='font-medium'>{item.temp.toFixed()}°</p>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Forecast