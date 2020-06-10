import React from "react";

import Logo from '../Logo/Logo'


export function Icons(){
    return(
      <React.Fragment>
          <div>
          <a href="https://www.facebook.com/maiaengaia.shaila"><i className="fa fa-facebook iconspaces"></i></a>
          <a href="https://twitter.com/maiaEnGaia1"><i className="fa fa-twitter iconspaces"></i></a>
          <a href="https://www.instagram.com/maiaengaia1"><i className="fa fa-instagram iconspaces"></i></a>
          </div>
    </React.Fragment>
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
