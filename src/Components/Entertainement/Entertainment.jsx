import React from 'react'
import SectionContainer from '../Container/SectionContainer'
import Entertainment1 from '../../assets/Entertainment/Entertainment1.webp'
import Entertainment2 from '../../assets/Entertainment/Entertainment2.webp'
import Entertainment3 from '../../assets/Entertainment/Entertainment3.webp'
import Carousel from '../Testimonials/Carousel'

const Entertainment = () => {

    const EntertainmentImages = [
        {
            Img: Entertainment1,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment2,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment3,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment1,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment2,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment3,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment1,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment2,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
        {
            Img: Entertainment3,
            title: 'Lorem ipsum dolor sit amet consectetur. '
        },
    ]
    return (
        <SectionContainer heading={'Unlimted Entertainment '} desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend.'}>

            <Carousel scrollDirection='right'>
                {EntertainmentImages.map(({ Img, title }, id) => (
                    <div className="flex flex-col items-start gap-3 min-w-full sm:min-w-[400px] max-h-[400px] lg:min-w-[620px] " key={id}>
                        <img src={Img} loading="lazy" alt="" className='w-full sm:max-h-[240px] max-h-[185px] lg:max-h-[400px]' />

                        <span className="text-lg font-normal text-white lg:text-2xl">
                            {title}
                        </span>
                    </div>
                ))}
            </Carousel>


        </SectionContainer>
    )
}

export default Entertainment