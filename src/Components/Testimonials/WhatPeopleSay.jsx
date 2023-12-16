import React from 'react'
import SectionContainer from '../Container/SectionContainer'
import Carousel from './Carousel'
import Testimonial from './Testimonial'

const WhatPeopleSay = () => {

    const PeopleReviews = [
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
        {
            title: 'Fantastic casino experience! Friendly staff, exciting games, and an amazing atmosphere. Highly recommended!',
            name: "Rohit Sharma"
        },
    ]
    return (
        <SectionContainer heading={'What People say'} desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend.'}>
            <div className="flex flex-col items-center justify-start w-full gap-6">

                {/* towards right */}
                <Carousel scrollDirection='right'>
                    {PeopleReviews.map(({ name, title }, id) => (
                        <Testimonial key={id} name={name} message={title} />
                    ))}
                </Carousel>

                {/* towards left */}
                <Carousel scrollDirection='left'>
                    {PeopleReviews.map(({ name, title }, id) => (
                        <Testimonial key={id} name={name} message={title} />
                    ))}
                </Carousel>

            </div>


        </SectionContainer>
    )
}

export default WhatPeopleSay