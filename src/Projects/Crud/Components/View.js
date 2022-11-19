import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { listStyle } from './MaterialCSS';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





const View = () => {

    const classes = listStyle();
    const { id } = useParams();

    let [detail, setDetail] = useState([])


    const tempID = useRef();
    tempID.current = getData;

    function getData() {
        axios.get(`https://my-json-server.typicode.com/kkpweb023/myServer/students/${id}`)
            .then((value) => setDetail(value.data))
            .catch((error) => console.log('! 404 fetch failed'))
    }
    useEffect(() => {
        tempID.current();
    }, [])



    const navigate = useNavigate();

    return (
        <>

            <Grid container justifyContent="center">

                <Grid item xs={12} m={1}>
                    <Box textAlign={'center'} p={2} className={classes.heading}>
                        <Typography variant='h4'>Student Details</Typography>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>

                                <TableRow style={{ backgroundColor: "#616161" }}>
                                    <TableCell align='center' style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>ID</TableCell>
                                    <TableCell align='center' style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Name</TableCell>
                                    <TableCell align='center' style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Age</TableCell>
                                    <TableCell align='center' style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Email</TableCell>
                                </TableRow>

                            </TableHead>

                            <TableBody>

                                <TableRow>
                                    <TableCell align='center'>{detail.id}</TableCell>
                                    <TableCell align='center'>{detail.name}</TableCell>
                                    <TableCell align='center'>{detail.age}</TableCell>
                                    <TableCell align='center'>{detail.email}</TableCell>
                                </TableRow>

                            </TableBody>

                        </Table>
                    </TableContainer>

                </Grid>

                <Grid item mt={2} >
                    <Button variant="contained" onClick={() => navigate('/crud')}>BACK TO HOME</Button>
                </Grid>

            </Grid>
        </>
    )
}

export default View;