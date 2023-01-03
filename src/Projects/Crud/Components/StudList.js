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
import '../CrudAPP.css';
import { ThreeDots } from 'react-loader-spinner';



const StudList = () => {
    const classes = listStyle();

    const { data, getData,isLoading } = useContext(MyContext);

    function handleDelete(id) {
        axios.delete(`http://localhost:4000/delete-student/${id}`)
            .then((value) => {
                if(value.data.deletedCount === 1){
                    alert("Delete Successfully");
                    
                }else if(value.data.deletedCount === 0){
                    alert("not record for deletion");  
                }
                getData();
            })
            .catch((error) => console.log('! process failed'))
    }

    return (
        <>
            <Grid item md={6} xs={12} >

                <Box textAlign={'center'} className={classes.heading} p={1}>
                    <Typography variant='h4'>Student List</Typography>
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: "#616161" }} >
                                <TableCell align='center' style={{ color: "white" }}>No</TableCell>
                                <TableCell align='center' padding='none' style={{ color: "white" }}>Name</TableCell>
                                <TableCell align='center' padding='none' style={{ color: "white" }}>Age</TableCell>
                                <TableCell align='center' padding='none' style={{ color: "white" }}>Email</TableCell>
                                <TableCell align='center' padding='none' style={{ color: "white" }}>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        {isLoading ?
                            <ThreeDots
                               height="80" 
                               width="80" 
                               radius="9"
                               color="#4fa94d" 
                               ariaLabel="three-dots-loading"
                               wrapperStyle={{}}
                               wrapperClassName=""
                               visible={true}
                            />
                            :
                            <TableBody>
                                {
                                    data.map((value, index) =>

                                        <TableRow key={index}>
                                            <TableCell align='center' padding="none">{index +1}</TableCell>
                                            <TableCell align='center' padding="none">{value.name}</TableCell>
                                            <TableCell align='center' padding="none">{value.age}</TableCell>
                                            <TableCell align='center' padding="none">{value.email}</TableCell>

                                            <TableCell align='center' padding="none">

                                                <Tooltip title="View" >
                                                    <IconButton>
                                                        <Link to={`/crud/view/${value._id}`}>
                                                            <VisibilityIcon fontSize="small" color="primary"></VisibilityIcon>
                                                        </Link>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Edit">
                                                    <IconButton>
                                                        <Link to={`/crud/edit/${value._id}`}>
                                                            <EditIcon fontSize="small" sx={{ color: purple[800] }}></EditIcon>
                                                        </Link>
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip title="Delete">
                                                    <IconButton onClick={() => handleDelete(value._id)}>
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
                        }
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}
export default StudList;