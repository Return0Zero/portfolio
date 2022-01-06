import React from 'react';
import './App.css';

import { About, Contact, Header, Navigation, Projects, Skills } from './containers';


export const App = () => {
    return (
        
        <div className='App'>
            <Navigation />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact /> 
        </div>
    )


}

export default App;