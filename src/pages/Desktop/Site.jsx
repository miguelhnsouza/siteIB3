import React from 'react';
import Home from './Home';
import Investidores from './Investidores';
import Simulador from './Simulador';
import Navbar from './Navbar';
import Questions from './Questions';
import Footer from './Footer';

export default function Site() {
    return (
        <div>
            <Navbar />
            <Home />
            <Investidores />
            <Simulador /> 
            <Questions />  
            <Footer />
        </div>
    );
}
