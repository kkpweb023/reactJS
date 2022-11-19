import React, { useContext } from 'react';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import { myContext } from '../WeatherAPP';

const PhWind = () => {

    const  { weather } = useContext(myContext); 

    return (
        <div className='PhWind_div'>
            <div className='Pressure_div'>
                <div><CompressIcon />Pressure</div>
                <div>{weather.pressure} hPa</div>
            </div>

            <div className='Humidity_div'>
                <div><DeviceThermostatIcon />Humidity</div>
                <div>{weather.humidity}%</div>
            </div>

            <div className='Wind_div'>
                <div><AirIcon />Wind</div>
                <div>{weather.speed} m/s</div>
            </div>
        </div>
    )
}
export default PhWind;