import React from 'react';
import Home from './Home';
import Investidores from './Investidores';
import Simulador from './Simulador';
import Navbar from './Navbar';
import NavbarMobile from '../Mobile/NavbarMobile';
import Questions from './Questions';
import Footer from './Footer';
import Loteadores from './Loteadores';
import HeroRotativo from './HeroRotativo';
import Oportunidades from './Oportunidades';
import { useMetaTracking } from '../../hooks/useMetaTracking';
import useIsDesktop from '../../hooks/useIsDesktop';

export default function Site() {
    const isDesktop = useIsDesktop();
    useMetaTracking();
    return (
        <div>
            {isDesktop ? <Navbar /> : <NavbarMobile />}
            {/* <Navbar />  */}
            <Home />
            <HeroRotativo />
            <Oportunidades />   
            <Investidores />
            <Simulador /> 
            <Questions />  
            <Loteadores />
            <Footer />
        </div>
    );
}
