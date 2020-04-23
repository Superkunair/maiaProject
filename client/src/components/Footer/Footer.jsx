import React from "react";
import '../../styles/main.css';
import Logo from '../Logo/Logo'


function Icons(){
    return(
        <div className="icons">
            <div className="icon1"><i className="fa fa-facebook"></i></div>
            <div className="icon2"><i className="fa fa-twitter"></i></div>
            <div className="icon3"><i className="fa fa-instagram"></i></div>
        </div>
    )
}

function Footer(){
    const iconFootSizes ={
        width:"200px",
        height:"200px",
    }
    return(
        <footer>
        <div className ="logoFootBox"><Logo {...iconFootSizes}/></div>
        <div className ="contactPhoneFootBox"><i className="fa fa-phone"></i> +52 33 3401 2651</div>
        <div className ="contactPhoneFootBox"><i className="fa fa-envelope"></i> maiaengaia@hotmail.com</div>
        <div className ="creditsBox">Made by Jordan Axel Hernández and Ian Itzael</div>
        <div className ="footerSocialIconsBox">
                <Icons/>
            </div>
        </footer>
    )
}


export default Footer;
