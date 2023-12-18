import React from 'react'
import Hero from '../Components/Hero/Hero'
import Experience from '../Components/AboutExperience/Experience'
import Gallery from '../Components/Gallery/Gallery'
import WhatPeopleSay from '../Components/Testimonials/WhatPeopleSay'
import Entertainment from '../Components/Entertainement/Entertainment'
import AboutPhoenixSection from '../Components/AboutPhoenix/AboutPhoenixSection'
import Journey from '../Components/Journey/Journey'
import Packages from '../Components/Packages/Packages'
import Footer from '../Components/Footer/Footer'
import Cta from '../Components/CTA/Cta'

const Home = () => {
    return (
        <div className='relative flex flex-col items-center justify-start w-full max-w-full min-h-screen '>
            <Hero />
            <div className='relative flex flex-col items-center justify-start w-full h-full max-w-full overflow-x-hidden '>
                <Experience />
                <Gallery />
                <WhatPeopleSay />
                <Journey />
                <Entertainment />
                <AboutPhoenixSection />
                <Packages />
                <Cta />
            </div>
        </div>
    )
}

export default Home