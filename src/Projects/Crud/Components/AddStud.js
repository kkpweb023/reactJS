
import React, { useContext, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { addStyle } from './MaterialCSS';
import axios from 'axios';
import { MyContext } from '../CrudAPP';




const AddStud = () => {
    const classes = addStyle();

    
  const { getData } = useContext(MyContext);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');




    function postData(){

        axios.post('https://my-json-server.typicode.com/kkpweb023/myServer/students', {
          name: name,
          age: age,
          email: email
        })
          .then((result) => console.log("Post Successfully"))
          .catch((error) => console.log("! 404 data not found"))
      }


      function handleADD(){
        postData();
        getData();

        setName('');
        setAge('');
        setEmail('');
     }
  
  
  
    





    return (
        <>
            <Grid item md={6} xs={12} >

                <Box textAlign={'center'} className={classes.heading} p={1} mb={2}>
                    <Typography variant='h4'>Add Student</Typography>
                </Box>

                <form noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                autoComplete='stuname'
                                name='stuname'
                                id='stuname'
                                required
                                fullWidth
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />

                        </Grid>


                        <Grid item xs={12}>
                            <TextField
                                label="Age"
                                variant="outlined"
                                autoComplete='stuage'
                                name='stuage'
                                required
                                fullWidth
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                autoComplete='stuemail'
                                name='stuemail'
                                required
                                fullWidth
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={11}>
                            <Button
                                variant="contained"
                                color='primary'
                                fullWidth
                                sx={{ marginTop: "1px", marginLeft: '18px', padding: "4px 0px" }}
                                onClick={handleADD}
                            >ADD</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default AddStud;