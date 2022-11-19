import React from 'react';
import './App.css';
import Head from './Head/Head';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import { Link, Route, Routes } from 'react-router-dom';
import pic from './Images/error404-16.jpg';
import WeatherAPP from './Projects/Weather/WeatherAPP';
import PaginateAPP from './Projects/Pagination/PaginateAPP';
import CrudAPP from './Projects/Crud/CrudAPP';
import View from './Projects/Crud/Components/View';
import Edit from './Projects/Crud/Components/Edit';


const App = () => {




  return (
    <div className='App_div'>

            <Head />
            <NavBar />
  
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/weather' element={<WeatherAPP />} />
            <Route path='/tablePagi' element={<PaginateAPP />} />

            <Route path='/crud' element={<CrudAPP />} />
            <Route path={`/crud/view/:id`} element={<View />} />
            <Route path={`/crud/edit/:info`} element={<Edit />} />
           






           

            <Route path='/*' element={<h1><img src={pic} style={{ width: "100%",height:"70vh" }} alt='' /><Link to={'/'}>Back to home page</Link></h1>} />

          </Routes>
    </div>
  )
}

export default App;


