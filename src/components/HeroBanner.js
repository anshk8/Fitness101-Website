import React from 'react'
import Banner from "../images/gym-banner.jpg";
const HeroBanner = () => {
    return (
        <div className='hero-banner'>


            <img alt="gym-banner" src={Banner} />


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