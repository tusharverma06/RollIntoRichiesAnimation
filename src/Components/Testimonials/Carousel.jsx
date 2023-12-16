import React, { useRef, useState, useEffect } from 'react';

const Carousel = ({
    fullWidth = true,
    className = 'p-[3rem_3rem]',
    isAutoScroll = true,
    scrollDirection,
    children,
}) => {
    const sliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);

    const handleMouseDown = (e) => {
        setIsDown(true);
        if (sliderRef.current) {
            sliderRef.current.classList.add('active');
            setStartX(e.pageX - (sliderRef.current.offsetLeft || 0));
            setScrollLeft(sliderRef.current.scrollLeft || 0);
        }
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        if (sliderRef.current) {
            sliderRef.current.classList.remove('active');
        }
    };

    const handleMouseUp = () => {
        setIsDown(false);
        if (sliderRef.current) {
            sliderRef.current.classList.remove('active');
        }
    };

    const handleMouseMove = (e) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - (sliderRef.current.offsetLeft || 0);
        const walk = (x - (startX || 0)) * 3; // scroll-fast
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = (scrollLeft || 0) - walk;
        }
    };

    useEffect(() => {
        // Auto-scroll after 3 seconds
        const autoScrollInterval = setInterval(() => {
            if (isAutoScroll && sliderRef.current) {
                const slider = sliderRef.current;

                // Get the width of the first child
                const childWidth = slider.firstElementChild?.offsetWidth || 0;

                // Get the computed style for the first child to get the flex gap
                const computedStyle = getComputedStyle(slider.firstElementChild);
                const flexGap = parseFloat(computedStyle.marginRight) || 0;

                // Calculate the total width including the flex gap
                const totalWidth = childWidth + flexGap;

                // Check if content has reached the end or start
                const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - totalWidth;
                const isAtStart = slider.scrollLeft === 0;

                if (scrollDirection === 'right' && !isAtEnd) {
                    // Scroll right
                    slider.scrollTo({
                        left: slider.scrollLeft + totalWidth,
                        behavior: 'smooth',
                    });
                } else if (scrollDirection === 'left') {
                    // If not at the start, scroll left
                    if (!isAtStart) {
                        slider.scrollTo({
                            left: slider.scrollLeft - totalWidth,
                            behavior: 'smooth',
                        });
                    } else {
                        // If at the start, scroll to the end
                        slider.scrollTo({
                            left: slider.scrollWidth,
                            behavior: 'smooth',
                        });
                    }
                } else {
                    if (scrollDirection === 'right' && isAtEnd) {
                        slider.scrollTo({
                            left: 0,
                            behavior: 'smooth',
                        });
                    }
                }

            }
        }, 3000);

        return () => {
            clearInterval(autoScrollInterval);
        };
    }, [isAutoScroll, scrollDirection]);

    const containerStyle = {
        overflowX: 'visible',
    };

    return (
        <div className={`carousel-container ${fullWidth ? 'w-screen' : 'w-full'} ${scrollDirection === 'right' ? '' : 'pr-[5rem]'}`} style={containerStyle}>
            <div
                id="carousel"
                className={`${className} ${scrollDirection === 'left' && '!pt-0'} snap no-scrollbar whitespace-wrap flex gap-8 overflow-x-scroll no-scrollbar select-none cursor-pointer mx-auto ${fullWidth ? 'w-screen' : 'w-full'
                    } h-auto transform will-change-transform`}
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {children}
            </div>
        </div>
    );
};

export default Carousel;
