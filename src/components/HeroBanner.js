import React from 'react'
import Banner from "../images/gym-banner.jpg";
const HeroBanner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover', // Ensure the image covers the div
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent repeating
                height: '50vh', // Full screen height
                display: 'flex', // To enable centering the text
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                textAlign: 'center', // Center text
            }}
            className="hero-banner"
        >

            


            <div className='hero-text'>
                <h1>Your Fitness guide 101</h1>
                <p>Created for you to start your fitness journey for free! Discover
                    Exercises, Read Workout Motivations and learn all about bettering
                    yourself!</p>
            </div>


            {/* <button className='explore-button '>Explore</button> */}


    



        </div>

        
    )
}

export default HeroBanner