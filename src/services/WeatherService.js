import { DateTime } from "luxon";

const API_KEY="59ea4b319a7d8cda13d1f23447ae873d"
const BASE_URL="https://api.openweathermap.org/data/2.5/"

const getWeatherData=(infoType,searchParams)=>{
   const url= new URL(BASE_URL+ infoType);
   url.search=new URLSearchParams({...searchParams,appid:API_KEY})
   
   return fetch(url)
   .then((res)=>res.json())
   .then((data)=>data);
};

const formatedCurrentWeather=(data)=>{
    const {
        coord: {lon,lat},
        main:{temp,feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
    } = data
    const {main: details,icon}=weather[0]

    return {lon,lat,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,weather,speed,details,icon}
}

const formatForcastWeather=(data)=>{
    let {timezone,daily,hourly}=data;
    daily=daily.slice(1,6).map(d=>{
        return{
            title: formatToLocalTime(d.dt,timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });
    hourly=hourly.slice(1,6).map(d=>{
        return{
            title: formatToLocalTime(d.dt,timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });
    return {timezone,daily,hourly};
};

const formatedWeatherData= async (searchParams)=>{
    const actualWeatherData= await getWeatherData("weather", searchParams).then(formatedCurrentWeather)
    const {lon,lat}=actualWeatherData

    const formatedForcastWeather= await getWeatherData('onecall',{
        lat,lon,exclude: 'current,minutely,alerts', units: searchParams.units,
    }).then(formatForcastWeather)

    return {...actualWeatherData,...formatedForcastWeather};
};

const formatToLocalTime=(secs,
    zone,
    format="cccc, dd LLL yyyy' | local time: 'hh:mm a"
    )=> DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode=(code)=>`https://openweathermap.org/img/wn/${code}@2x.png`

export default formatedWeatherData;
export {formatToLocalTime,iconUrlFromCode};