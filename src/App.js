import React from 'react';

import { About, Contact, Header, Navigation, Projects, Skills } from './containers';
import { Graphics, InfoFrontend, InfoUX, ProjGame, ProjJavascriptBundle, ProjSilas, ProjTextToSpeech, ProjPortfolio } from './components';


export const App = () => {
    return (
        <div className='App'>
            <about />
            <div className='gradient-bg--top'>
                <Navigation />
                <Header />
            </div>
            <div className='gradient-bg--bot'>
               <About />
               <Skills />
               <Projects />
               <Contact /> 
            </div>
        </div>
    )
}

export default App;