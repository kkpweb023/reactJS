import React,{ useContext } from 'react';
import { myContext } from '../WeatherAPP';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const IconTemp = () => {

    const  { weather,change } = useContext(myContext); 

    const tempFahrenheit = ((weather.temp) * 9 / 5 + 32).toFixed(2);
    const minTempFahrenheit = ((weather.temp_min) * 9 / 5 + 32).toFixed(2);
    const maxTempFahrenheit = ((weather.temp_max) * 9 / 5 + 32).toFixed(2);

    return (
        <div className='icon_div'>

            {/* ========================== ICON  ============================ */}

            <div className='icon'>
                <img src={weather.iconURL} alt="" />
                <div>{weather.description}</div>
            </div>

            {/* ========================== TEMP ============================ */}

            <div className='Temp_div'>

                {
                    change === true
                        ? <div > {weather.temp} °C </div>
                        : <div > {tempFahrenheit} °F </div>
                }
                <span>
                    <span><ArrowDownwardIcon />Min</span>
                    {
                        change === true
                            ? <span>{weather.temp_min}°C</span>
                            : <span>{minTempFahrenheit}°F</span>
                    }
                </span>
                |
                <span>
                    <span><ArrowUpwardIcon />Max</span>
                    {
                        change === true
                            ? <span>{weather.temp_max}°C</span>
                            : <span>{maxTempFahrenheit}°F</span>
                    }
                </span>
            </div>
        </div>
    )
}

export default IconTemp;