import React from 'react'

const SectionContainer = ({ heading, desc, children }) => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen font-Cinzel bg-bg-primary">
            <div className="flex items-center flex-col h-full justify-center w-full max-w-[2000px] px-8 py-16 sm:px-10 lg:px-16 xl:px-20 gap-20 ">

                {/* heading */}
                <div className="flex flex-col items-center justify-start gap-6">
                    <h1 className="lg:text-[52px] uppercase font-Cinzel text-3xl gradient-text leading-normal font-extrabold">
                        {heading}
                    </h1>
                    <h4 className="w-full max-w-5xl text-base text-center text-white lg:text-xl">
                        {desc}
                    </h4>
                </div>
                {children}

                {!heading.toLowerCase().includes('about') &&
                    //gradient right 

                    <div
                        style={{
                            borderRadius: `640px`,
                            background: `radial-gradient(50% 50% at 50% 50%, #FFB800 0%, rgba(238, 140, 41, 0.00) 100%)`,
                            filter: `blur(331.8500061035156px)`
                        }}
                        className='absolute top-1/2 -translate-y-1/2  z-[10] left-1/2 -translate-x-1/2 max-w-full w-[440px] h-[449px] '>
                    </div>
                }
            </div>

        </section >)
}

export default SectionContainer