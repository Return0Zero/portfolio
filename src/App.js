import React from 'react';
import './App.css';

import { About, Contact, Header, Navigation, Projects, Skills, CTA, Footer } from './containers';


export const App = () => {
    return (
        
        <div className='App'>
            <Navigation />
            <CTA />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact /> 
            <Footer />
        </div>
    )


}

export default App;