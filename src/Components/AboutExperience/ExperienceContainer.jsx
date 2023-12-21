import React from 'react'

const ExperienceContainer = ({ vid, title, text }) => {
    return (
        <div className="flex flex-col lg:w-[calc(100%/3-32px)] md:w-[calc(100%/2-32px)] w-full items-center justify-start max-w-md gap-8 px-2 ">

            <video loading="lazy" src={vid} className='max-w-[186px] max-h-[172px]' autoPlay muted loop></video>
            <div className="flex flex-col items-center justify-start w-full gap-4">
                <h1 className="lg:text-3xl text-xl text-[#E7C980] font-Cinzel font-bold">{title}</h1>
                <h4 className="w-full max-w-5xl text-[#ABABAB] text-base lg:text-xl text-center">
                    {text}
                </h4>
            </div>
        </div>
    )
}

export default ExperienceContainer