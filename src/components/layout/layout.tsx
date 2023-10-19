import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import HeroImage from './heroImage';
import { PropsWithChildren } from 'react';

export default function Layout ({ children }: PropsWithChildren<{}>) {
    return(
    <div className="flex flex-col h-screen justify-between">
        <Header/>
            <main>{children}</main>
        <Footer/>
    </div>
    )
}