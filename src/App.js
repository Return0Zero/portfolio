import React, {useEffect} from 'react';
import './App.css';
import ReactGa from 'react-ga';

import { About, Contact, Header, Navigation, Projects, Skills, CTA, Footer } from './containers';


export const App = () => {

    useEffect(() => {
        ReactGa.initialize('G-CC571RXN32')
        ReactGa.pageview('/')
    }, [])

    return (
        
        <div className='App'>
            <div className='max-width'>
                <Navigation />
                <CTA />
                <Header />
                <About />
                <Skills />
                <Projects />
                <Contact /> 
                <Footer />
            </div>
        </div>
    )


}

export default App;