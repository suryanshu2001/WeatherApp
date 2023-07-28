/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import '../index.css';
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons';
import { useState } from "react";

function Inputs({setQuery,setunits,units}) {
    
    const [city,setcity]=useState('')

    const handleSearchClick=()=>{
        if(city !== '') setQuery({q:city})
    };
    const handleLocationClick=()=>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat=position.coords.latitude
                let lon=position.coords.longitude

                setQuery({lat,lon})
            })
        }
    };
    const handleUnitChange=(e)=>{
        const selectedeUnit=e.currentTarget.name;
        if(units !== selectedeUnit) setunits(selectedeUnit);
    };

    return(
        <div className="flex flex-row justify-center my-6 ">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type='text' placeholder="search for city" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" onChange={(e)=> setcity(e.currentTarget.value)}/>
                <UilSearch size={25} className='text-white cursor-pointer ease-out hover:scale-125' onClick={handleSearchClick}/>
                <UilLocationPoint size={25} className='text-white cursor-pointer ease-out hover:scale-125' onClick={handleLocationClick}/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                 <button name="metric" className="text-xl text-white font-light mx-2 transition ease-out hover:scale-125" onClick={handleUnitChange}>°C</button>
                 <p className="text-xl text-white font-light">|</p>
                 <button name='imperial' className="text-xl text-white font-light mx-2 transition ease-out hover:scale-125" onClick={handleUnitChange}>°F</button>
            </div>
        </div>
    )
}
export default Inputs