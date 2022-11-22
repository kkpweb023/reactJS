import React, { useEffect, useRef, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { addStyle } from './MaterialCSS';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const navigate = useNavigate();
    const classes = addStyle();
    const { info } = useParams();

    let [edit, setEdit] = useState({

        name:"",
        age:'',
        email:''
  })

    const tempID = useRef();
    tempID.current = getData;

    function getData(){
        axios.get(`https://my-json-server.typicode.com/kkpweb023/myServer/students/${info}`)
            .then((value) => setEdit(value.data))
            .catch((error) => console.log('! 404 fetch failed'))
    }
    useEffect(() => {
        tempID.current();
    }, [])

    function getEdit(){

        axios.put(`https://my-json-server.typicode.com/kkpweb023/myServer/students/${info}`,{
              id:info,
              name:edit.name,
              age:edit.age,
              email:edit.email       
        })
        .then((value)=>{
          getData();
          console.log('Update Successfully');
      })
        .catch((error)=>console.log('! 404 update failed'));
  }

   function handleEdit(){
    getEdit();
    navigate('/crud');
   }

    return (
        <div style={{margin:"0px 5px"}}>

            <Grid container justifyContent={'center'} spacing={4} mt={2}>

                <Grid item md={6} xs={12}>
                    <Box textAlign={'center'} className={classes.heading} p={2} mb={2}>
                        <Typography variant='h4' sx={{ fontSize: "48px", fontWeight: "bold" }}>Edit Student</Typography>
                    </Box>

                    <form noValidate>
                        <Grid container spacing={2} justifyContent={'center'}>

                            <Grid item xs={12} md={6}>
                                <TextField label="ID" variant="outlined" autoComplete='stuid' name='stuid' id='stuid' value={info} disabled fullWidth />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Name" 
                                    variant="outlined" 
                                    autoComplete='stuname' 
                                    name='stuname' 
                                    id='stuname' 
                                    required 
                                    fullWidth
                                    value={edit.name}  
                                    onChange={(e)=>setEdit({...edit,name:e.target.value})}
                                   
                                    
                                    />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Age" 
                                    variant="outlined" 
                                    autoComplete='stuage' 
                                    name='stuage' 
                                    required 
                                    fullWidth
                                    value={edit.age} 
                                    onChange={(e)=>setEdit({...edit,age:e.target.value})}
                                   
                                    
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField 
                                    label="Email" 
                                    variant="outlined" 
                                    autoComplete='stuemail' 
                                    name='stuemail' 
                                    required 
                                    fullWidth
                                    value={edit.email} 
                                    onChange={(e)=>setEdit({...edit,email:e.target.value})}
                                   
                                   
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Button
                                    variant="contained"
                                    color='primary'
                                    fullWidth
                                    sx={{padding: "4px 0px" }}
                                    onClick={handleEdit}
                                >UPDATE</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

            </Grid>

            <Box textAlign={'center'} p={2} ml={2}>
                <Button variant="contained" onClick={() => navigate('/crud')}>BACK TO HOME</Button>
            </Box>


        </div>
    )
}

export default Edit;