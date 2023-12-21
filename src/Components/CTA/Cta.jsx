import React from 'react'
import SectionContainer from '../Container/SectionContainer'
import Object from '../../assets/OBJECTS.svg'
import Heart from '../../assets/CardCurvedHeart.svg'
import Spade from '../../assets/CardCurvedSpade.svg'

const Cta = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full py-20 bg-bg-primary '>

      <div className="flex flex-col items-center justify-start overflow-hidden relative w-11/12 max-w-[1300px] gap-6 py-20 bg-[#111011] border border-[#E7C980] ">

        {/* heading */}
        <div className="flex flex-col relative z-30 items-center justify-start gap-4 max-w-[771px] w-full">
          <h1 className="lg:text-[52px] uppercase font-Cinzel text-3xl gradient-text leading-normal font-extrabold">
            {'Welcome to GOLDEN LIFE'}
          </h1>
          <h4 className="w-full max-w-5xl text-base text-center text-white lg:text-xl">
            {'Lorem ipsum dolor sit amet consectetur. Iaculis purus lorem tempus ac enim iaculis egestas sapien commodo. Nibh congue pulvinar diam eget amet faucibus.'}
          </h4>
        </div>

        {/* book now button */}
        <button className='flex capitalize items-center justify-center px-7 py-2 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)]'>
          Book Now
        </button>

        {/* all objects */}
        <img loading="lazy" src={Object} className="absolute top-0 right-0 z-10 hidden w-full h-full max-w-full md:block " alt="" />

        {/* adding a layer in small width devices */}
        <div className="absolute top-0 right-0 z-20 hidden w-full h-full bg-bg-primary/40 md:block lg:hidden " alt="" ></div>

        {/* curved cards for mobile */}
        <img loading="lazy" src={Heart} className="absolute top-0 -left-2 z-10 block w-[80px] h-[80px] md:hidden " alt="" />
        {/* curved spade card for mobile */}
        <img loading="lazy" src={Spade} className="absolute bottom-4 -right-2 z-10 block w-[90px] h-[90px] md:hidden " alt="" />
      </div>

    </div>
  )
}

export default Cta