const apiKey = "f23283f94b8f2fd6d6ba4f02ab816366";
const makeIconURL = (iconID) => `https://openweathermap.org/img/wn/${iconID}@2x.png`;


const GetFormattedWeatherData = async (cityName, units = 'metric') => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    const data = await fetch(apiURL)
        .then((res) => res.json())
        .then((data) => data);

    const { main: { temp, temp_min, temp_max, pressure, humidity },
        name,
        sys: { country },
        weather,
        wind: { speed }
    } = data;

    const { description, icon } = weather[0];

    return {
        temp,
        temp_min,
        temp_max,
        pressure,
        humidity,
        name,
        country,
        description,
        iconURL: makeIconURL(icon),
        speed
    }

};

export default GetFormattedWeatherData;