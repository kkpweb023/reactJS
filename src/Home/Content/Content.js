import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';



const Content = () => {


  return (
    <div className='Content_div'>

      <div className='weather'>
        <Link to={"/weather"} >OPEN</Link>
      </div>

      <div className='tablePagi'>
        <Link to={"/tablePagi"}>OPEN</Link>
      </div>

      <div className='crud'>
        <Link to={"/crud"} >OPEN</Link>
      </div>
      <div>
        <Link to={"/"} >Not Active</Link>
      </div>
  
    </div>
  )
}
export default Content;