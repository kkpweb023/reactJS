import React, { useContext } from 'react';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import { listStyle } from './MaterialCSS';
import { purple, red } from "material-colors";
import { Link } from 'react-router-dom';
import { MyContext } from '../CrudAPP';
import axios from 'axios';


const StudList = () => {
    const classes = listStyle();

    const {data,getData} = useContext(MyContext);
  
    function handleDelete(id){
      axios.delete(`http://localhost:3100/students/${id}`)
      .then((value)=>{
              getData();
             console.log("Delete Successfully")
            })
      .catch((error)=>console.log('! process failed')) 
  
    }
  






    return (
        <>

            <Grid item md={6} xs={12}>

                <Box textAlign={'center'} className={classes.heading} p={1}>
                    <Typography variant='h4'>Student List</Typography>
                </Box>

                <TableContainer component={Paper}>

                    <Table>

                        <TableHead>

                            <TableRow style={{ backgroundColor: "#616161" }}>
                                <TableCell align='center' style={{ color: "white" }}>No</TableCell>
                                <TableCell align='center' style={{ color: "white" }}>Name</TableCell>
                                <TableCell align='center' style={{ color: "white" }}>Age</TableCell>
                                <TableCell align='center' style={{ color: "white" }}>Email</TableCell>
                                <TableCell align='center' style={{ color: "white" }}>Action</TableCell>
                            </TableRow>

                        </TableHead>

                        <TableBody>
                           {

                              data.map((value,index)=>

                            <TableRow key={index}>
                                <TableCell align='center'>{value.id}</TableCell>
                                <TableCell align='center'>{value.name}</TableCell>
                                <TableCell align='center'>{value.age}</TableCell>
                                <TableCell align='center'>{value.email}</TableCell>

                                <TableCell align='center'>

                                    <Tooltip title="View" >
                                        <IconButton>
                                            <Link to={`/crud/view/${value.id}`}>
                                                <VisibilityIcon fontSize="small" color="primary"></VisibilityIcon>
                                            </Link>
                                        </IconButton>
                                    </Tooltip>


                                    <Tooltip title="Edit">
                                        <IconButton>
                                            <Link to={`/crud/edit/${value.id}`}>
                                                <EditIcon fontSize="small" sx={{ color: purple[800] }}></EditIcon>
                                            </Link>
                                        </IconButton>
                                    </Tooltip>



                                    <Tooltip title="Delete">
                                        <IconButton onClick={()=>handleDelete(value.id)}>
                                            <DeleteIcon
                                                fontSize="small"
                                                sx={{ color: red[700] }}
                                            ></DeleteIcon>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                             )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}

export default StudList;