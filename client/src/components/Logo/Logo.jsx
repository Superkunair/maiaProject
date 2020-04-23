import React from "react";
const logo = require('../../resources/logox.png')
const logoReduced = require('../../resources/reduced.png');

export default function Logo({width,height}){
    if(width,height){
        return(
            <img src={logo} height={height} width={width}></img>
        )
    }
    return(
        <img src={logoReduced}></img>
    )
}
