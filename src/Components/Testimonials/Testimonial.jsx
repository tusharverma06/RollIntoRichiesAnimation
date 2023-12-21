import React from 'react'
import ProfileIcon from '../../assets/profileIcon.svg'
const Testimonial = ({ message, name }) => {
    return (
        <div className='flex flex-col bg-[rgba(5,5,4,0.30)] border border-[#E7C980] min-h-[281px] items-center justify-between min-w-[250px] md:min-w-[543px] py-[38px] px-[46px] '>
            <h4 className="w-full max-w-md text-sm font-normal text-white md:text-base text-start lg:text-xl">{message}</h4>

            <div className="flex items-center justify-start w-full gap-5">
                <img src={ProfileIcon} loading="lazy" alt="" />
                <h4 className="text-base font-normal text-center text-white lg:text-xl">{name}</h4>
            </div>
        </div>
    )
}

export default Testimonial