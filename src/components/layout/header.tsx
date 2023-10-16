import React from "react";
import pymoLogo from '../../images/logo-negro.png'

export const Header = () => {
    return (
        <div className='bg-black'>
            <img src={pymoLogo} className='h-16 w-auto m-2' alt='pymo logo'/>        
        </div>
    );
}