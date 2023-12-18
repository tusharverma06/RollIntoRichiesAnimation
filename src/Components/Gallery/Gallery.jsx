import SectionContainer from '../Container/SectionContainer'
// Carousel used in gallery
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handlePrevClick = () => {
        setSelectedImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        // Auto-scroll every 3 seconds (adjust as needed)
        const intervalId = setInterval(() => {
            handleNextClick();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [selectedImage]);

    return (
        <div className="relative">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className={`cursor-pointer ${selectedImage === index ? 'border-4 border-blue-500' : ''}`}
                        onClick={() => handleImageClick(index)}
                    />
                ))}
            </div>
            <div className="absolute flex items-center space-x-2 transform -translate-y-1/2 top-1/2">
                <button onClick={handlePrevClick}>&lt;</button>
                <button onClick={handleNextClick}>&gt;</button>
            </div>
        </div>
    );
};


const Gallery = () => {
        const images = [
          'https://bigdaddy.in/wp-content/uploads/2023/07/bd-cb4.jpg',
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png',
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png', // Repeated for the sake of the example
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png',
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png',
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png',
          'https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png'
        ];

 
    return (

<SectionContainer heading={'GALLERY'} desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend bibendum arcu nunc.'}>
<img src='/Elipse.webp' className="w-full h-[650px] object-cover absolute z-10" />


<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 z-20 justify-center items-center gap-7'>
    <div>
        <img src='https://bigdaddy.in/wp-content/uploads/2023/07/bd-cb4.jpg' className="w-full h-auto" />
    </div>
    <div className='flex flex-col gap-5'>
        <div><img src='https://bigdaddy.in/wp-content/uploads/2023/05/02-1.png' className="w-full h-[250px] object-cover" /></div>
        <div><img src='https://bigdaddy.in/wp-content/uploads/2023/07/bg-gl1.jpg' className="w-full h-[250px] object-cover" /></div>
    </div>
    <div>
        <img src='https://bigdaddy.in/wp-content/uploads/2023/05/04-3.png' className="w-full h-[650px] object-cover" />
    </div>
    <div className='flex flex-col gap-5'>
        <div><img src='https://bigdaddy.in/wp-content/uploads/2023/07/bg-gl2.jpg' className="w-full h-[250px] object-cover" /></div>
        <div><img src='https://bigdaddy.in/wp-content/uploads/2023/05/09-2.png' className="w-full h-[250px] object-cover" /></div>
    </div>
    <div>
        <img src='https://bigdaddy.in/wp-content/uploads/2023/07/bg-gl3.jpg' className="w-full h-auto" />
    </div>
</div>
        </SectionContainer>

    )
}

export default Gallery