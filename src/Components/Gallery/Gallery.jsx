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
    return (
        <SectionContainer heading={'GALLERY'} desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend bibendum arcu nunc.'}>



        </SectionContainer>
    )
}

export default Gallery