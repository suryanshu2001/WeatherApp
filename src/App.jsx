/* eslint-disable no-unused-vars */
import './index.css';
//importsrs './App.css'
import TopButtons from "./components/TopButtons";
import InputArea from './components/InputArea';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import formatedWeatherData from './services/WeatherService';
import { useState } from 'react';
import { useEffect } from 'react';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [Query,setQuery]=useState({q:'berlin'})
  const [units,setunits] = useState('metric')
  const [weather,setweather] = useState(null)
  
  useEffect (() => {
    const fetchWeather = async ()=>{
      //const message=Query.q ? Query.q : "current location.";
      
       await formatedWeatherData({...Query,units}).then(
        (data)=>{
          setweather(data);
        }
      );
    };
  
    fetchWeather();
  },[Query,units]);
  
  const formatBackground=()=>{
    if(!weather) return "from-cyan-700 to-blue-700";
    const threshold=units== "metric" ? 20:60;
    if(weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  }

return (
    <div className={`mx-auto max-w-screen-md nt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <InputArea setQuery={setQuery} units={units} setunits={setunits}/>
      
      {weather && (
        <>
      <TimeAndLocation Weather={weather}/>
      <TemperatureDetails Weather={weather}/>
      <Forecast title='hourly forecast' items={weather.hourly}/>
      <Forecast title='daily forecast' items={weather.daily}/>
      </>
      )}
      
      </div>
      
  );
}

export default App;
