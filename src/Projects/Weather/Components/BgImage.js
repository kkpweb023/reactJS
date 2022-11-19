import React,{ useContext, useEffect, useRef, useState } from 'react';


import ClearPic from '../../../Images/ClearPic.jpg';
import scatteredClouds from '../../../Images/scatteredClouds.jpg';
import brokenCloud from '../../../Images/brokenCloud.jpg';
import thunderstorm from '../../../Images/thunderstorm.jpg';
import rain from '../../../Images/rain.jpg';
import snowClouds from '../../../Images/snowClouds.jpeg';
import { myContext } from '../WeatherAPP';

const BgImage = (props) => {

    const  { weather } = useContext(myContext); 
    const [backImage, setBackImage] = useState("");

    function backgroundPic() {

        if ((weather.description) === "clear sky") {

            setBackImage(ClearPic);

        } else if ((weather.description) === "few clouds") {

            setBackImage(ClearPic);

        } else if ((weather.description) === "scattered clouds") {

            setBackImage(scatteredClouds);

        } else if ((weather.description) === "smoke") {

            setBackImage(scatteredClouds);

        } else if ((weather.description) === "broken clouds") {

            setBackImage(brokenCloud);

        } else if ((weather.description) === "overcast clouds") {

            setBackImage(brokenCloud);

        } else if ((weather.description) === "thunderstorm") {

            setBackImage(thunderstorm);

        } else if ((weather.description) === "moderate rain") {

            setBackImage(thunderstorm);

        } else if ((weather.description) === "rain") {

            setBackImage(rain);

        } else {

            setBackImage(snowClouds);
        }

    }

    const myDep = useRef();
    myDep.current = backgroundPic;

    useEffect(() => {
        myDep.current();
        props.BackImage(backImage);
    }, [weather.description,props,backImage])

  return(
           <>
           </>
  )  
}
export default BgImage;