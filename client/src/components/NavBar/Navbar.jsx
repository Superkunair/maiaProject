import React from "react";
import '../../styles/main.css';


function NavBar(){
    return(
        <nav>
        <div className="navLogo">Logo</div>
        <div className="navHome">Home</div>
        <div className="navBlog">Blog</div>
        <div className="navServicio">Servicios</div>
        <div className="navContacto">Contacto</div>
        </nav>
    )
}

export default NavBar;
