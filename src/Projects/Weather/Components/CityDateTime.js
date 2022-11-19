import React,{ useContext }  from 'react';
import { myContext } from '../WeatherAPP';


const CityDateTime = () => {

    const  { weather } = useContext(myContext); 

    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString('default', { month: "long" });
    let day = d.toLocaleString('default', { weekday: "long" });

    let time = d.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <div className='CityDateTime_div'>
            <div>{weather.name}, {weather.country}</div>
            <div> {day},{month} {date}, {year}</div>
            <div>{time}</div>
        </div>
    )
}
export default CityDateTime;