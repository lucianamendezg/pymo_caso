import React from "react";
import pymoLogo from '../../images/logo-negro.png'

let deliverables: { title: string,  link: string }[] = [
    {title:"Creative Type", link: "../../images/github.png"},
    {title:"Diagrama",link:""},
    {title:"Tablas en Excel",link:""},
    {title:"Base de datos",link:""},
    {title:"Formulario para Hospitales",link:""},
    {title:"Dashboard",link:""},
];

//button style

export const Header = () => {
    return (
        <div className='bg-black'>
            <img src={pymoLogo} className='h-16 w-auto m-2' alt='pymo logo'/>      
        </div>
    );
}