import React, { useState } from "react";
import pymoLogo from '../../images/logo-negro.png'
import githubLogo from '../../images/github.png'

let deliverables: { key: number, title: string,  link: string }[] = [
    {key:1, title:"Creative Type", link: "https://drive.google.com/file/d/1PbPZyQFLTIQ6WsND36eUnEty_FjItHTN/view?usp=sharing"},
    {key:2, title:"Diagrama",link:"https://drive.google.com/file/d/1T7rJMwm0eb8CMdXMebWqH9QxM1Glb58h/view?usp=sharing"},
    {key:3, title:"Tablas en Excel",link:"https://docs.google.com/spreadsheets/d/1ooqVLic26LBIdG8lY2WtPmMCxU2dGeZx3xvghjr3OCo/edit?usp=sharing"},
    {key:5, title:"Formulario para Hospitales",link:"/formulario"},
    {key:6, title:"Dashboard",link:"/dashboard"},
];

function menuLinkStyle (title: string, link: string) {
    return (
        <a href={link}>
            <button className="bg-gradient-to-b hover:from-orange hover:to-red px-4 py-3 hover:text-white text-xs">
                <p className="font-filson">
                    {title}
                </p>
            </button>
        </a>
    )
}

export const Header = () => {
    const [nav, setNav] = useState(true); //cambia estado cuando le pican al hamburger menu
    return (
        <div className=''>   
            <div className="flex items-center justify-between">
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
                    </div>
                    <a href='https://github.com/lucianamendezg/pymo_caso' className='px-5'>
                        <img src={githubLogo} className='h-8 w-auto' alt='Github logo'/> 
                    </a>
                </div>
                </div>
                <div className="lg:hidden">
                    {/*Menu cuando nav is true*/}
                {nav &&
                    <div className="block">
                        <ul>
                            {deliverables.map((deliverable) => (
                            <li key={deliverable.key} className="inline">
                                {menuLinkStyle(deliverable.title, deliverable.link)}
                            </li>
                        ))}
                        </ul> 
                    </div>
                }
                </div>
        </div>
    );
}