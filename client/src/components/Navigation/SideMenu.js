import React from "react";
import './styles/styles.css';

export function TestSideMenu(){
    return(
        <header class="header" role="banner">
  <h1 class="logo">
    <a href="#">Menú</a>
  </h1>
  <div class="nav-wrap">
    <nav class="main-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li><a href="#">Acerca</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Contactar</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
    <ul class="social-links list-inline unstyled list-hover-slide">
      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
      <li><a href="#"><i className="fa fa-envelope"></i></a></li>
    </ul>
  </div>
</header>
    )
}
