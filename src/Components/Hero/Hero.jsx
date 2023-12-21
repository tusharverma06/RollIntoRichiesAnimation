import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useScroll, useTransform, motion } from 'framer-motion'
import BgVideo from '../../assets/bgVideo.mp4'
import Wheel from '../../assets/chakra.webp'
import VerticalPheonixCasino from '../../assets/pheonixCasinoGoaVertical.svg'
import HeartCardA from '../../assets/cardHeartA.svg'
import SpadeLeftCard from '../../assets/cardSpadeLeftA.svg'
import DiamondCardA from '../../assets/cardDiamondA.svg'
import SpadeRightCard from '../../assets/cardSpadeA.svg'
import Curtain from '../../assets/curtain.webp'
import Heading from '../../assets/heading.webp'
import HeadingMobile from '../../assets/headingMobile.webp'
import BlurredDiceRight from '../../assets/goldDiceBlurred.svg'
import BlurredDiceLeft from '../../assets/diceBlurredLeft.svg'
import RightCoin from '../../assets/coinRight.svg'
import BlurredCoin from '../../assets/blurreCoin.svg'
import BronzeCoin from '../../assets/leftBronzeCoin.svg'
import GoldCoin from '../../assets/goldenCoinRight.svg'
import WheelArrow from '../../assets/wheelArrow.svg'

const Hero = () => {
    const vidRef = useRef()

    const [isShow, setIsShow] = useState(true)


    const windoWidth = useMediaQuery()
    // Framer motion stuff
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    })

    const top = useTransform(scrollYProgress, [0, 0.57, 0.575, 0.583, 0.585, 0.585], windoWidth < 600 ? ['35%', '35%', '35%', '35%', '70%', '70%'] : ['19%', '19%', '19%', '19%', '60%', '60%'])
    const scaleText = useTransform(scrollYProgress, [0, 0.57, 0.575, 0.580, 0.585,], ['1', '1', 1, '1', '1'])
    const display = useTransform(scrollYProgress, [0, 0.54, 0.583, 0.585], ['block', 'block', 'block', 'none'])
    // const displayAfterLogo = useTransform(scrollYProgress, [0, 0.580, 0.59, 0.59], ['none', 'none', 'block', 'block'])
    const background = useTransform(scrollYProgress, [0, 0.54, 0.585], ['transparent', 'transparent', '#030303'])

    // animations stuff for logo coming up after scroll
    const yAfterLogo = useTransform(scrollYProgress, [0, 0.54, 0.55, 0.582, 0.585, 0.585, 0.585], ['200px', '200px', '200px', '200px', '0px', '0px', '0px'])
    const scaleAfterLogo = useTransform(scrollYProgress, [0, 0.54, 0.582, 0.585, 0.585], ['0.4', 0.8, '0.8', 1, '1'])
    const opacityAfterLogo = useTransform(scrollYProgress, [0, 0.582, 0.585, 0.585], ['0', '0', 1, '1'])

    useEffect(() => {
        if (isShow) {
            if (windoWidth < 600) {
                setTimeout(() => {
                    setIsShow(false);
                }, 40000);
            } else {
                setTimeout(() => {
                    setIsShow(false);
                }, 2800);
            }
        }

    }, [isShow, windoWidth]);

    return (
        <section ref={targetRef} className="w-full h-[220vh] sm:h-[350vh] relative no-scrollbar">

            <motion.div className='sticky top-0 right-0 flex items-start justify-start w-full h-screen no-scrollbar' style={{ background: background }}>



                <div className='relative flex flex-col items-center justify-between w-full h-screen overflow-hidden'>

                    {/* initial load */}
                    {isShow &&
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [1, 0] }}
                            exit={{ opacity: 0 }}
                            transition={{ opacity: { type: "spring", stiffness: 400, damping: 80, duration: windoWidth < 600 ? 10.2 : 0.05, delay: windoWidth < 600 ? 23.6 : 2.6 } }}
                            className="min-w-full back flex items-center justify-end sm:justify-center min-h-screen bg-black z-[100] ">
                            <motion.div
                                initial={{ y: windoWidth < 600 ? 50 : 0, scale: 0.8 }}
                                animate={{ y: windoWidth < 600 ? [50, -20] : [0, -140], scale: [0.8, 1] }}
                                exit={{ y: 50, scale: 0.4 }}
                                transition={{
                                    duration: 0.5, ease: "linear",
                                    y: { type: "spring", stiffness: 400, damping: 80, duration: 0.4, delay: windoWidth < 600 ? 2.2 : 2.2 },
                                    scale: { type: "spring", stiffness: 400, damping: 80, duration: 0.4, delay: windoWidth < 600 ? 23.5 : 2.2 },
                                }}
                                className={`relative flex flex-col items-center justify-center gap-4 `}>
                                {windoWidth < 600 ?
                                    <img src={HeadingMobile} alt="" className='w-11/12 max-w-max z-[120] ' />
                                    :
                                    <img src={Heading} alt="" className='w-11/12 max-w-max z-[120] ' />
                                }
                            </motion.div>
                        </motion.div>
                    }
                    {/* heading */}
                    <motion.div
                        initial={{ y: 100, scale: 0.6 }}
                        animate={{ y: [100, 0], scale: [0.8, 1] }}
                        exit={{ y: 50, scale: 0.4 }}
                        style={{ top, scale: scaleText }}
                        transition={{
                            duration: 0.5, ease: "easeInOut",
                            // y: { type: "spring", stiffness: 100, damping: 60, duration: 0.2, delay: 1 },
                        }}

                        className={`relative ${isShow ? 'z-[120]' : 'z-50'}  flex flex-col items-center justify-center gap-4 transition-all duration-[600ms]`}>
                        <img src={windoWidth < 600 ? HeadingMobile : Heading} alt="" className='w-11/12 max-w-max z-[120] ' />
                    </motion.div>

                    {/* background video */}
                    <motion.div
                        style={{ display }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-full h-screen object-cover top-0 right-0 absolute z-[1]"
                    >
                        <video
                            ref={vidRef}
                            width="100%"
                            height="100%"
                            autoPlay
                            loop
                            muted // Add the muted attribute
                            src={BgVideo}
                            type="video/mp4"
                            className='object-cover w-full h-full'
                        />
                    </motion.div>


                    {/* curtains */}
                    <section className="items-start justify-between hidden w-full sm:flex">

                        {/* right curtain */}
                        <motion.div
                            initial={{ x: '200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ x: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display, rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
                            className=' right-0  w-[100px]  sm:w-[156px] lg:w-[206px] xl:w-[306px] bottom-[calc(0%-0px)] h-screen z-[15] absolute '
                        >
                            <img loading="lazy" src={Curtain} className='w-full h-full' alt="" />
                        </motion.div>

                        {/* left curtain */}
                        <motion.div
                            initial={{ x: '-200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ x: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display }}
                            transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
                            className=' left-0  w-[100px] sm:w-[156px] lg:w-[206px] xl:w-[306px] bottom-[calc(0%-0px)] h-screen z-[15] absolute '
                        >
                            <img loading="lazy" src={Curtain} className='w-full h-full' alt="" />
                        </motion.div>

                    </section>


                    {/* wheel, cards */}
                    <motion.div
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ display }}
                        className='relative max-w-[830px]'
                    >

                        {/* cards on left side */}
                        {/*  A spade card*/}
                        <motion.div
                            initial={{ y: '200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ y: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                            className='left-[-2%] sm:-left-[8%] lg:-left-[18%]   w-[120px] sm:w-[200px] bottom-[calc(0%-40px)] h-[120px] sm:h-[200px]  lg:w-[226px] lg:h-[226px] z-[35] absolute '
                        >
                            <img loading="lazy" src={SpadeLeftCard} className='w-full h-full' alt="" />
                        </motion.div>

                        {/*  A heart card*/}
                        <motion.div
                            initial={{ y: '200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ y: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className=' left-[0%] sm:left-[-6%] lg:-left-[14%]   w-[120px] sm:w-[220px] bottom-[calc(0%-10px)] h-[120px] sm:h-[220px]  lg:w-[266px] lg:h-[266px] z-40 absolute '
                        >
                            <img loading="lazy" src={HeartCardA} className='w-full h-full' alt="" />
                        </motion.div>

                        <div className="relative">

                            {/* wheel Arrow */}
                            <img loading="lazy" src={WheelArrow} className='absolute z-50 -translate-x-1/2 left-1/2 lg:bottom-[38%] bottom-[38%] sm:bottom-[44%] w-16 ' alt="" />

                            {/* wheel image */}
                            <img src={Wheel} className='relative z-30 w-[350px] wheel bottom-[-100px] sm:bottom-[-150px] lg:bottom-[-180px] sm:w-[550px] ' alt="" />
                        </div>

                        {/* cards on right side */}
                        {/*  A spade card right*/}
                        <motion.div
                            initial={{ y: '200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ y: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                            className=' -right-[6%] lg:-right-[14%]   w-[120px] sm:w-[200px] bottom-[calc(0%-40px)] h-[120px] sm:h-[200px]  lg:w-[206px] lg:h-[206px] z-[45] absolute '
                        >
                            <img loading="lazy" src={SpadeRightCard} className='w-full h-full' alt="" />
                        </motion.div>

                        {/*  A Diamond card*/}
                        <motion.div
                            initial={{ y: '200vh', opacity: 0 }}
                            // initial={{ opacity: 0 }}
                            animate={{ y: '0vh', opacity: 1 }}
                            // animate={{ opacity: 1 }}
                            style={{ display }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className=' right-[3%] lg:right-[-6%]   w-[120px] sm:w-[220px] bottom-[calc(0%-10px)] h-[120px] sm:h-[220px]  lg:w-[250px] lg:h-[250px] z-40 absolute '
                        >
                            <img loading="lazy" src={DiamondCardA} className='w-full h-full' alt="" />
                        </motion.div>
                    </motion.div>

                    {/*blurred dice right*/}
                    <motion.div
                        style={{ display }}
                        className=' right-[3%] lg:-right-4 2xl:-right-4 bottom-[calc(0%+100px)] dice  w-[86px] sm:w-[206px] lg:w-[266px]  h-[76px] sm:h-[206px] lg:h-[266px] z-40 absolute '
                    >
                        <img loading="lazy" src={BlurredDiceRight} className='w-full h-full' alt="" />
                    </motion.div>

                    {/*blurred dice left*/}
                    <motion.div
                        style={{ display }}
                        className=' left-[-2%] lg:left-[0%] 2xl:left-[0%] lg:bottom-[calc(0%+80px)] dice bottom-[calc(0%+120px)]  w-[86px] sm:w-[182px] lg:w-[212px]  h-[76px] sm:h-[182px] lg:h-[212px] z-40 absolute '
                    >
                        <img loading="lazy" src={BlurredDiceLeft} className='w-full h-full' alt="" />
                    </motion.div>


                    {/*coin right*/}
                    <motion.div
                        style={{ display }}
                        className=' right-[6%] lg:right-[8%] 2xl:right-[12%] bottom-[calc(0%+220px)]  coin w-auto sm:w-[175px] lg:w-[225px]  h-[76px] sm:h-[170px] lg:h-[219px] z-40 absolute '
                    >
                        <img loading="lazy" src={RightCoin} className='w-full h-full scale-150 sm:scale-0' alt="" />
                    </motion.div>

                    {/*blurred coin right*/}
                    <motion.div
                        style={{ display }}
                        className=' right-[5%] lg:right-[3%] 2xl:right-[3%] bottom-[calc(0%+450px)]   w-[86px] sm:w-[75px] lg:w-[115px]  h-[76px] sm:h-[70px] lg:h-[119px] z-40 absolute '
                    >
                        <img loading="lazy" src={BlurredCoin} className='w-full h-full' alt="" />
                    </motion.div>

                    {/*goldish bronze coin right*/}
                    <motion.div
                        style={{ display }}
                        className='right-[-6%] sm:right-[-2%] bottom-[calc(0%+450px)]   w-[86px] sm:w-[75px] lg:w-[115px]  h-[76px] sm:h-[70px] lg:h-[119px] z-40 absolute '
                    >
                        <img loading="lazy" src={GoldCoin} className='w-full h-full' alt="" />
                    </motion.div>

                    {/* bronze coin right */}
                    <motion.div
                        style={{ display }}
                        className=' right-[-1%] lg:right-[-1%] 2xl:right-[-1%] sm:bottom-[calc(0%+350px)] bottom-[calc(0%+160px)]   w-[91px]   h-[83px]  z-40 absolute '
                    >
                        <img loading="lazy" src={BronzeCoin} className='w-full h-full' alt="" />
                    </motion.div>

                    {/*coin left*/}
                    <motion.div
                        style={{ display, }}
                        className=' left-[6%]  lg:left-[8%] 2xl:left-[12%] bottom-[calc(0%+180px)]  coin w-[86px] sm:w-[125px] lg:w-[168px]  h-[76px] sm:h-[120px] lg:h-[163px] z-40 absolute '
                    >
                        <img loading="lazy" style={{ rotateY: 180 }} src={RightCoin} className='w-full h-full scale-150 sm:scale-0' alt="" />
                    </motion.div>


                    {/*blurred coin left*/}
                    <motion.div
                        style={{ display }}
                        className=' left-[-5%] lg:left-[-3%] 2xl:left-[0%] bottom-[calc(0%+450px)] sm:bottom-[calc(0%+300px)]   w-[86px] sm:w-[75px] lg:w-[115px]  h-[76px] sm:h-[70px] lg:h-[119px] z-40 absolute '
                    >
                        <img loading="lazy" src={BlurredCoin} className='w-full rotate-[-60deg]  h-full' alt="" />
                    </motion.div>

                    {/*goldish bronze coin left*/}
                    <motion.div
                        style={{ display }}
                        className='left-[-6%] sm:left-[0%] bottom-[calc(0%+520px)] sm:bottom-[calc(0%+420px)]   w-[46px] h-[38px]  z-40 absolute '
                    >
                        <img loading="lazy" src={GoldCoin} className='w-full h-full' alt="" />
                    </motion.div>

                    {/* bronze coin left */}
                    <motion.div
                        style={{ display }}
                        className=' left-[0%] sm:left-[5%] bottom-[calc(0%+240px)] sm:bottom-[calc(0%+420px)]  w-[91px]   h-[83px]  z-40 absolute '
                    >
                        <img loading="lazy" src={BronzeCoin} className='w-full h-full' alt="" />
                    </motion.div>


                    {/* after logo */}
                    <motion.div
                        transition={{ duration: 0.6, y: { delay: 0.1 }, ease: "easeInOut" }}
                        style={{ y: yAfterLogo, scale: scaleAfterLogo, opacity: opacityAfterLogo }}
                        className='w-11/12 max-w-[120px] sm:max-w-[160px] block  absolute top-[30%] sm:top-[20%] transition-all duration-1000 z-[100]'
                    >
                        <motion.img
                            src={VerticalPheonixCasino}
                            className='w-full h-full'
                            alt="Big Logo"
                            width="100%"
                            height="100%"
                        >

                        </motion.img>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}

export default Hero