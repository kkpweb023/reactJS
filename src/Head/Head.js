
import React from 'react';
import HeadPic from '../Images/HeadPic.png';
import './Head.css';


const Head = () => {
  return (
    <div className='head_img_div'>

     <img src={HeadPic} alt="" className={"head_image"}/>

     <span>
        <span>Kaushal</span>
        <span>Web</span>
     </span>
        

    </div>
  )
}

export default Head;