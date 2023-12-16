import React from 'react'
import Hero from '../Components/Hero/Hero'
import Experience from '../Components/AboutExperience/Experience'
import Gallery from '../Components/Gallery/Gallery'
import WhatPeopleSay from '../Components/Testimonials/WhatPeopleSay'
import Entertainment from '../Components/Entertainement/Entertainment'
import AboutPhoenixSection from '../Components/AboutPhoenix/AboutPhoenixSection'
import Journey from '../Components/Journey/Journey'

const Home = () => {
    return (
        <div className='relative flex flex-col items-center justify-start w-full min-h-screen '>
            <Hero />
            <Experience />
            <Gallery />
            <WhatPeopleSay />
            <Journey />
            <Entertainment />
            <AboutPhoenixSection />
        </div>
    )
}

export default Home