import './Hero.css'
import '../src/hooks/useAnalytics'
import myImage from './assets/photo_2025-07-05_10-48-11.jpg'
import { useEffect } from 'react'
function Hero(){
    useEffect('hero')
    return(
        <header className='sections content-loading' id="home">
            <div className="hero-text">
                <h1 id="intro">
                </h1>
                <p id='tagline'></p>
            </div>
            <div className="hero-image"><img src={myImage} /></div>
        </header>
    )
}

export default Hero;