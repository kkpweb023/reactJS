import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import nauPic from '../Images/nauPic3.png';


const Footer = () => {


    return (

        <footer className="text-center text-white" style={{backgroundColor:"rgba(30, 30, 37,0.8)",marginTop:"80px"}}>

            <div className="container p-4">

                <section className="mb-4">

                    <a href={"https://www.facebook.com/26kaushal.pandey11"} target="_blank" rel="noopener noreferrer" className="btn text-white btn-floating m-3"
                        style={{ backgroundColor: "#3b5998", borderRadius: "50%",boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}>

                        <i className="fab fa-facebook-f"></i>
                    </a>


                    <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/kpandey023/"} style={{ backgroundColor: "#ac2bac", borderRadius: "50%",boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}} className="btn text-white btn-floating m-3">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a target={"_blank"} rel="noopener noreferrer" href={"https://www.linkedin.com/in/kaushal-kishor-pandey-90847aab"} style={{ backgroundColor: "#0082ca", borderRadius: "50%",boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}} className="btn text-white btn-floating m-3">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a target={"_blank"} rel="noopener noreferrer" href={"https://github.com/kkpweb023"} style={{ backgroundColor: "#333333", borderRadius: "50%",boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"}} className="btn text-white btn-floating m-3">
                        <i className="fab fa-github"></i>
                    </a>
                    
                    <a target={"_blank"} rel="noopener noreferrer" href={"https://www.naukri.com/mnjuser/profile?id=&altresid"} style={{ backgroundColor: "#dd4b39",width:"35px",height:"35px", borderRadius: "50%",boxShadow:"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",position:"relative"}} className="btn text-white btn-floating m-3">
                        <img src={nauPic} alt="" width={22} height={22} style={{position:"absolute",left:"6px", top:"5px"}}/>
                    </a>
                </section>

            </div>

            <div className="p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", display: "flex", justifyContent:"space-between"}}>

                <div>
                    © 2022 Copyright:
                    <a style={{textDecorationLine:"none", marginLeft: "2px", color:"rgba(183,188,250,1)" }} href="https://kkpweb023.github.io/reactJS/">KaushalWeb</a>
                </div>


                <div className='footer_info'>
                    <Link to={'/'} className='link'>Home</Link>
                    <Link to={'/about'} className='link'>About</Link>
                    <Link to={'/contact'} className='link'>Contact</Link>
                    <Link to={'/blog'} className='link'>Blog</Link>
                </div>

            </div>



        </footer>
    )
}

export default Footer;