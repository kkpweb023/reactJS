import React from 'react';
import exPic from '../Images/ExPic.JPG';
import Content from './Content/Content';
import './Home.css';

const Home = () => {
  return (
    <div className='Home_div'>

        <div className='ExPic_div'>

          <img src={exPic} alt="" />

          <div>
            Find easier ways to use your benefits<br/> 
            for any path you take.
          </div>

        </div>

        <Content />
    </div>
  )
}
export default Home;