import React from "react";
import '../../App.css';
const logoPath = 'logox.png';

function MenuDropDown(){
    return (
        <div className="aSideDropDown">
        <button><i className="fa fa-bars"></i></button>
        </div>
    )
}
function NavBarLogo(){
        return(
            <div className="logo">
            <img src={logoPath} height="140" width="200" alt="not"></img>
            </div>
        )
}
function NotificationBell(){
    return(
        <div className="navBell">
        <i className="fa fa-bell"></i>
    </div>
    )
}
function HelpIcon(){
    return(
        <div className="faqIcon">
  <a href='#'><i className="fa fa-question-circle"></i></a> 
        </div>
    )
}
function NavBar(){
    return (
    <div className="navContainer">
        <div className="navBarBase">
        <MenuDropDown />
        <NavBarLogo />
        <HelpIcon />
        <NotificationBell />
    </div>
    </div>
    )
}

export default NavBar;
