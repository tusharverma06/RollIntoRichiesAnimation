import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMediaQuery } from './hooks/useMediaQuery';
import { useScroll, useTransform, motion } from 'framer-motion'


function App() {
  const vidRef = useRef()

  const windoWidth = useMediaQuery()
  // Framer motion stuff
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })

  const top = useTransform(scrollYProgress, [0, 0.58, 0.586], ['0%', '0%', '50%'])
  const scaleText = useTransform(scrollYProgress, [0, 0.58, 0.586,], ['1', '1', '0.5'])
  const display = useTransform(scrollYProgress, [0, 0.58, 0.586], ['block', 'block', 'none'])
  const displayAfterLogo = useTransform(scrollYProgress, [0, 0.58, 0.585], ['none', 'none', 'block'])
  const background = useTransform(scrollYProgress, [0, 0.58, 0.585], ['transparent', 'transparent', 'black'])
  const yAfterLogo = useTransform(scrollYProgress, [0, 0.59, 0.59], ['200px', '200px', '0px'])
  const scaleAfterLogo = useTransform(scrollYProgress, [0, 0.59, 0.59], ['0.6', '0.6', '1'])

  return (
    <div className='relative flex flex-col items-center justify-start w-full min-h-screen '>

      <section ref={targetRef} className="w-full h-[350vh] relative no-scrollbar">

        <motion.div className='sticky top-0 right-0 flex items-start justify-start w-full h-screen no-scrollbar' style={{ background: background }}>
          <div className='relative flex flex-col items-center justify-start w-full h-full overflow-hidden'>

            {/* heading */}
            <motion.div
              initial={{ y: 50, scale: 0.6 }}
              animate={{ y: [50, 0], scale: [0.6, 1] }}
              exit={{ y: 50, scale: 0.4 }}
              style={{ top, scale: scaleText }}
              transition={{
                duration: 0.5, ease: "easeIn", delay: 0.2,
                top: { type: "spring", stiffness: 10000, delay: 0.8 },
              }}

              className="relative z-50 flex flex-col items-center justify-center gap-4 transition-all duration-[600ms]">
              <h1
                className="relative z-50 mt-48 text-6xl font-bold leading-none uppercase whitespace-no-wrap md:text-7xl lg:text-8xl text-stroke">
                ROLL INTO RICHIES
              </h1>
              <h3
                className="relative z-50 mt-48 text-6xl font-bold leading-none uppercase whitespace-no-wrap md:text-7xl lg:text-8xl styled-heading">
                From now
              </h3>
            </motion.div>

            {/* background video */}
            <motion.div
              style={{ display }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="w-full h-screen object-cover top-0 right-0 absolute z-[1]"
            >
              <video
                ref={vidRef}
                width="100%"
                height="100%"
                autoPlay
                loop
                muted // Add the muted attribute
                src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/video/spotlight.mp4"
                type="video/mp4"
              />
            </motion.div>


            {/* wheel */}
            <motion.div
              initial={{ bottom: '400px', scale: 1.4, opacity: 0 }}
              animate={{ bottom: windoWidth > 600 ? '-322px' : '-140px', opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ display }}
              className='   xl:w-[606px] w-2/3 sm:w-3/4 md:w-[566px] 2xl:w-[666px] xl:h-[606px] md:h-[566px] 2xl:h-[666px] wheel z-50 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/roulette.png" className='w-full h-full' alt="" />
            </motion.div>

            {/*right  mask */}
            <motion.div
              initial={{ y: '-20vh', opacity: 0 }}
              // initial={{ opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              // animate={{ opacity: 1 }}
              style={{ display }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className='right-[0%] lg:right-[10%] 2xl:right-[16%] w-[120px] sm:w-[220px] bottom-[calc(0%-10px)] h-[120px] sm:h-[220px] 2xl:w-[406px] lg:w-[266px] xl:w-[306px] xl:h-[306px] lg:h-[266px] 2xl:h-[406px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/carnival-right.png" className='w-full h-full' alt="" />
            </motion.div>

            {/*left  mask */}
            <motion.div
              initial={{ y: '-20vh', opacity: 0 }}
              // initial={{ opacity: 0 }}
              animate={{ y: '0vh', opacity: 1 }}
              // animate={{ opacity: 1 }}
              style={{ display }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className=' left-[0%] lg:left-[10%] 2xl:left-[16%] w-[120px] sm:w-[220px] bottom-[calc(0%-10px)] h-[120px] sm:h-[220px]  2xl:w-[406px] lg:w-[266px] xl:w-[306px] xl:h-[306px] lg:h-[266px] 2xl:h-[406px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/carnival-left.png" className='w-full h-full' alt="" />
            </motion.div>


            {/*ring*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ display }}
              className=' left-[0%] lg:left-[8%] 2xl:left-[12%] bottom-[calc(0%+100px)]  sm:bottom-[calc(0%+300px)] sm:w-[96px] w-[46px]  sm:h-[96px] h-[46px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/silver-coin.png" className='w-full h-full' alt="" />
            </motion.div>

            {/*card*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className=' right-[0%] lg:right-[8%] 2xl:right-[12%] bottom-[calc(0%+100px)]  sm:bottom-[calc(0%+300px)] w-[106px] sm:w-[196px]  h-[106px] sm:h-[196px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/card.png" className='w-full h-full' alt="" />
            </motion.div>


            {/*blurred dice*/}
            <motion.div
              style={{ display }}
              className=' left-[3%] lg:left-[12%] 2xl:left-[17%] bottom-[calc(0%+300px)] dice  sm:bottom-[calc(0%+560px)] w-[86px] sm:w-[166px]  h-[76px] sm:h-[146px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/b-dice.png" className='w-full h-full' alt="" />
            </motion.div>


            {/* coin */}
            <motion.div
              style={{ display }}
              className=' right-[3%] lg:right-[12%] 2xl:right-[17%] bottom-[calc(0%+300px)] dice  sm:bottom-[calc(0%+560px)] w-[26px] sm:w-[86px]  h-[86px] sm:h-[166px] z-40 absolute '
            >
              <img src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/b-coin.png" className='w-full h-full' alt="" />
            </motion.div>

            {/* after logo */}
            <motion.div
              transition={{ duration: 0.6, y: { delay: 2 } }}
              style={{ display: displayAfterLogo, y: yAfterLogo, scale: scaleAfterLogo }}
              className='w-11/12 max-w-sm  absolute bottom-[calc(0%+300px)] transition-all duration-1000'
            >
              <motion.img
                src="https://bigdaddy.in/wp-content/themes/big-daddy/assets/img/big-logo.svg" className='w-full h-full' alt="Big Logo" width="100%" height="100%" >

              </motion.img>
            </motion.div>
          </div>
        </motion.div>

      </section>
      <section className="flex items-center justify-center w-full min-h-screen text-6xl text-black font-bol">OTHER CONTENT</section>
    </div>
  )
}

export default App
