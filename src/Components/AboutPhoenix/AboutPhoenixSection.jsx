import React, { useRef } from 'react'
import Juice from '../../assets/About/juice.svg'
import Cards from '../../assets/About/cards.svg'
import Dices from '../../assets/About/dices.svg'
import Trophy from '../../assets/About/trophy.svg'
import SectionContainer from '../Container/SectionContainer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const AboutPhoenixSection = () => {

    const Info = [
        {
            title: `LOREM ISPUM`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consec blandit eu tellus.`,
            img: Juice
        },

        {
            title: `LOREM ISPUM`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consec blandit eu tellus.`,
            img: Cards
        },

        {
            title: `LOREM ISPUM`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consec blandit eu tellus.`,
            img: Trophy
        },

        {
            title: `LOREM ISPUM`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consec blandit eu tellus.`,
            img: Dices
        },

    ]
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    })

    const windoWidth = useMediaQuery()

    const top = useTransform(scrollYProgress, [0, 0.16, 0.18], windoWidth < 600 ? ['60px', '60px', 'opx'] : ['60px', '60px', '0px'])
    const scaleText = useTransform(scrollYProgress, [0, 0.16, 0.18], windoWidth < 600 ? ['0.9', '0.9', '1'] : ['0.7', '0.6', '1'])


    return (
        <SectionContainer
            heading={'ABOUT PHOENIX'}
            desc={'Lorem ipsum dolor sit amet consectetur. Iaculis purus lorem tempus ac enim iaculis egestas sapien commodo. Nibh congue pulvinar diam eget amet faucibus. Diam id tincidunt ipsum eget maecenas. Ultrices sed dui id urna quis sed scelerisque sem. Dignissim sed vulputate sit risus fringilla.'
            }
        >
            <img src='/Elipse.webp' className="absolute z-10 object-cover w-full h-full " />

            <div ref={targetRef} className="z-30 flex flex-wrap items-center justify-center w-full gap-y-10 md:justify-center lg:justify-between 3xl:justify-center 3xl:gap-24">
                {Info.map(({ title, text, img }, id) =>
                    <motion.div
                        style={{ y: top, scale: scaleText, }}
                        key={id} className="flex transition-all duration-300 ease-linear flex-col font-Cinzel lg:w-[calc(100%/4-40px)] md:w-[calc(100%/2-32px)] w-full items-center justify-start max-w-[300px] gap-5 px-2 ">
                        {/* img,heading */}
                        <div className="flex flex-col items-center justify-start w-full gap-4">
                            <img src={img} loading="lazy" alt='' />
                            <h1 className="text-base font-bold text-white font-Cinzel lg:text-xl">{title}</h1>
                        </div>
                        {/* one liner */}
                        <h4 className="w-full max-w-full text-[#ABABAB] text-sm lg:text-base text-center">
                            {text}
                        </h4>
                    </motion.div>

                )}
            </div>

        </SectionContainer>
    )
}

export default AboutPhoenixSection;