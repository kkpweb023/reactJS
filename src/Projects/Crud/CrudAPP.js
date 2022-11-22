import React, { createContext, useEffect, useState } from 'react'
import './CrudAPP.css';
import { useStyle } from './Components/MaterialCSS';
import { Box, Grid, Typography } from '@mui/material';
import StudList from './Components/StudList';
import AddStud from './Components/AddStud';
import axios from 'axios';

export const MyContext = createContext();


const CrudAPP = () => {

    const classes = useStyle();

    const [data, setData] = useState([]);

    async function getData() {
      axios.get(`https://my-json-server.typicode.com/kkpweb023/myServer/students`)
        .then((value,index) => setData(value.data))
        .catch((error) => console.log('! 404 fetch failed')) 
    }
    useEffect(() => {
      getData();
    },[])
  
  
      
    return (
  
      <MyContext.Provider value={{data,getData}}>
  
        <div className='crudAPP_div'>
            
            <Box textAlign="center" className={classes.heading} p={2} mb={2}>
                <Typography variant='h3'>React CRUD with API Call</Typography>
            </Box>
            <Grid container spacing={4} justify="center">
                    <AddStud />
                    <StudList />
            </Grid>
        </div>
      </MyContext.Provider>
    )
  }
  
  export default CrudAPP;


