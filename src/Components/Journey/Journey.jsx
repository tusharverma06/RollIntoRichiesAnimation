import React, { useState, useRef } from 'react';
import SectionContainer from '../Container/SectionContainer'
import Pause from '../../assets/pauseIcon.svg'
import Resume from '../../assets/resumeIcon.svg'
import Video from '../../assets/showCase.mp4'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Journey = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleButtonClick = () => {
        const video = videoRef.current;

        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoHover = () => {
        // Show/hide the button on hover
        const button = document.getElementById('playPauseButton');
        if (button) {
            button.style.visibility = 'visible';
        }
    };

    const handleVideoLeave = () => {
        // Hide the button when not hovered
        const button = document.getElementById('playPauseButton');
        if (button) {
            button.style.visibility = 'hidden';
        }
    };

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    })

    const windoWidth = useMediaQuery()

    const top = useTransform(scrollYProgress, [0, 0.18, 0.20], windoWidth < 600 ? ['200px', '200px', '0px'] : ['200px', '200px', '0px'])
    const scaleText = useTransform(scrollYProgress, [0, 0.18, 0.20], ['0.7', '0.6', '1'])

    return (
        <SectionContainer
            heading={'Your Journey at Phoenix'}
            desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend.'
            }
        >
        <img src='/Elipse.webp' className="w-full h-full object-cover lg:block hidden absolute z-10 right-[700px] top-5" />
            <motion.div style={{ y: top, scale: scaleText }} className="relative z-20 w-full h-auto max-w-6xl mx-auto overflow-hidden transition-all duration-500 " ref={targetRef}>
                <video
                    ref={videoRef}
                    className="w-full h-auto relative z-[30] transition-opacity duration-500 ease-in-out opacity-100 group "
                    autoPlay
                    muted
                    loop

                >
                    <source src={Video} type="video/mp4" />
                </video>
                <button
                    className="absolute z-50 block p-4 transform -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-white/10"
                    onClick={handleButtonClick}
                >
                    <span className="w-20 h-20 rounded-full border border-white/10 bg-white bg-opacity-[0.04] flex items-center justify-center">
                        {!isPlaying ?
                            <img src={Resume} alt="" />
                            :
                            <img src={Pause} alt="" />
                        }
                    </span>

                </button>
            </motion.div>


        </SectionContainer>)
}

export default Journey