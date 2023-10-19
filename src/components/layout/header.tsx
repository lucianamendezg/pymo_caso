import React, { useState } from "react";
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
        <button className="bg-gradient-to-b hover:from-orange hover:to-red px-4 py-3 hover:text-white text-xs">
            <p className="font-filson">
                <a href={link}>{title}</a>
            </p>
        </button>
    )
}

export const Header = () => {
    const [nav, setNav] = useState(true); //cambia estado cuando le pican al hamburger menu
    return (
        <div className='flex items-center justify-between'>   
                <a href="/"><img src={pymoLogo} className='flex items-center h-18 w-auto ml-2 my-3' alt='PYMO logo'/></a>
                {/*Menu cuando esta en laptop (pantallas large)*/}
                <div className="hidden lg:inline">
                    <ul>
                        {deliverables.map((deliverable) => (
                            <li key={deliverable.key} className="inline">
                                {menuLinkStyle(deliverable.title, deliverable.link)}
                            </li>
                        ))}
                    </ul> 
                </div>
                {/*Menu cuando esta en iPad/mobile (medium/small), aparece hamburger*/}
                <div className="flex justify-end items-center">
                    <div className="lg:hidden">
                        {/*Hamburger menu symbol*/}
                        <button className="space-y-1.5" onClick={() => setNav(!nav)}>
                            <div className="w-8 h-0.5 bg-black"></div>
                            <div className="w-8 h-0.5 bg-black"></div>
                            <div className="w-8 h-0.5 bg-black"></div>
                        </button>
                        {/*Menu cuando nav is true*/}
                        {nav &&
                            <div className="flex gap-2">
                                Menu
                            </div>
                        }
                    </div>
                    <a href='https://github.com/lucianamendezg' className='px-5'>
                        <img src={githubLogo} className='h-8 w-auto' alt='Github logo'/> 
                    </a>
                </div>
        </div>
    );
}