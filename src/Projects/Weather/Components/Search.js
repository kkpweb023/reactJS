import React,{ useContext, useState }  from 'react';
import { myContext } from '../WeatherAPP';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

    const  { change,setChange,setCityName } = useContext(myContext); 
    const [cityInput, setCityInput] = useState('Delhi');
    
    function hundleTemp() {

        if (change === true) {
            setChange(false)

        } else if (change === false) {
            setChange(true)

        }

    }

    function hundleWeather() {
        setCityName(cityInput);
    }

  return (
    <div className='search_div'>

                    <InputGroup className="InputGroup">
                        <Form.Control
                            type={'search'}
                            placeholder="Search City"
                            autoComplete='on'
                            onChange={(e) => setCityInput(e.target.value)}
                        />
                        <Button size="medium" className="btn" onClick={hundleWeather}> <SearchIcon /></Button>
                    </InputGroup>

                    <InputGroup className="InputGroupBTN">
                        {
                            change === true
                                ? <Button size="medium" className="Cf_btn" onClick={hundleTemp}>°C</Button>
                                : <Button size="medium" className="Cf_btn" onClick={hundleTemp}>°F</Button>
                        }
                    </InputGroup>
                </div>
  )
}
export default Search;