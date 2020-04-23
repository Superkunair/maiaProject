import React from "react";
import '../../styles/main.css';
import Logo from '../Logo/Logo';

function NavBar(){
    const navLogoSize={
        width:"100px",
        height:"100px",
    }
    return(
        <nav>
        <div className="navLogo"><Logo /></div>
        <div className="navHome">Home</div>
        <div className="navBlog">Blog</div>
        <div className="navServicio">Servicios</div>
        <div className="navContacto">Contacto</div>
        </nav>
    )
}

export default NavBar;
