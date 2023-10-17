import React from "react";
import pymoLogo from '../../images/logo-negro.png'
import githubLogo from '../../images/github.png'

let deliverables: { key: number, title: string,  link: string }[] = [
    {key:1, title:"Creative Type", link: ""},
    {key:2, title:"Diagrama",link:""},
    {key:3, title:"Tablas en Excel",link:""},
    {key:4, title:"Base de datos",link:""},
    {key:5, title:"Formulario para Hospitales",link:""},
    {key:6, title:"Dashboard",link:""},
];

function menuLinkStyle (title: string, link: string) {
    return (
        <button className="bg-gradient-to-b hover:from-orange hover:to-red px-4 py-3 hover:text-white text-sm">
            <p className="font-filson">
                <a href={link}>{title}</a>
            </p>
        </button>
    )
}

export const Header = () => {
    return (
        <div className=''>   
                <img src={pymoLogo} className='h-18 w-auto mx-2 my-3' alt='PYMO logo'/>
                <ul>
                    {deliverables.map((deliverable) => (
                        <li key={deliverable.key}>
                            {menuLinkStyle(deliverable.title, deliverable.link)}
                        </li>
                    ))}
                </ul> 
                <a href='https://github.com/lucianamendezg'>
                    <img src={githubLogo} className='h-8 w-auto' alt='Github logo'/> 
                </a>
        </div>
    );
}