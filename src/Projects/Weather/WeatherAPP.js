import React, { useEffect, useState, useRef, createContext } from 'react';
import './WeatherAPP.css';

import GetFormattedWeatherData from '../Weather/Components/WeatherServices';

import PhWind from '../Weather/Components/PhWind';
import IconTemp from '../Weather/Components/IconTemp';
import Search from '../Weather/Components/Search';
import CityDateTime from '../Weather/Components/CityDateTime';
import BgImage from '../Weather/Components/BgImage';


export const myContext = createContext();

const WeatherAPP = () => {
    
  const [cityName, setCityName] = useState('Delhi');
  const [weather, setWeather] = useState('');
  const [change, setChange] = useState(true);

  const getWeatherDetails = async () => {
    const data = await GetFormattedWeatherData(cityName);
    setWeather(data);
  };
  const myWeather = useRef();
  myWeather.current = getWeatherDetails;

  useEffect(() => {
    myWeather.current();
  }, [cityName]);

  const [myBgImage, setMyBgImage] = useState('')

  const BackImage = (a) => {
    setMyBgImage(a);
  }

  return (

    <myContext.Provider value={{ weather: weather, change: change, setChange: setChange, setCityName: setCityName }} >
        <div className='Weather_div'>
          <BgImage BackImage={BackImage} />
          <Search />
          <div className='WeatherContent_div' style={{ backgroundImage: `url(${myBgImage})` }}>
            <CityDateTime />
            <hr />
            <IconTemp />
            <PhWind />
          </div>
        </div>
    </myContext.Provider>
  )
}

export default WeatherAPP;