// Import necessary libraries and components
import { useState } from 'react';
import Logo from '../../assets/navLogo.svg';
import { Link } from 'react-router-dom';

// Add your MobileNavLink and MobileNavigation components as they are

export function Header() {
    const links = [
        {
            href: '/',
            title: 'About us',
        },
        {
            href: '/',
            title: 'Reviews',
        },
        {
            href: '/',
            title: 'Gallery',
        },
        {
            href: '/',
            title: 'Packages',
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`py-[30px]  fixed top-0 right-0 w-full px-14 sm:px-36 lg:px-40 xl:px-60 items-center z-50 flex justify-center bg-transparent`}>
            <nav className="relative z-50 flex flex-col items-center justify-between w-full md:flex-row">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    {/* Logo */}
                    <a href="/" aria-label="Home">
                        <img
                            src={Logo}
                            alt="logo "
                        />
                    </a>
                    <div className="lg:hidden">
                        {/* Hamburger menu icon */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none focus:bg-transparent"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* nav links */}
                <div
                    className={`flex transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'opacity-0 lg:opacity-100 translate-x-full lg:translate-x-0 lg:px-0 px-5'}  lg:static absolute right-0 top-[calc(100%+2px)] z-[1001] lg:gap-y-0 gap-y-3 flex-col lg:bg-transparent bg-black w-full lg:auto max-w-md px-6 py-4 rounded-lg lg:rounded-none lg:flex-grow justify-center lg:flex-row items-start lg:items-center gap-x-5 md:gap-x-8 lg:max-w-xl `}
                >
                    {links.map((link, id) => (
                        <Link to={'/'} className='text-lg font-normal text-white transition-all duration-300 group hover:scale-105' key={id}>
                            {link.title}
                            <span className="block max-w-0   group-hover:max-w-full h-1 rounded-lg bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)] transition-all duration-500 "></span>
                        </Link>
                    ))}
                    {/* book now button */}
                    <button className='flex capitalize items-center justify-center px-7 py-[14px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)]'>
                        Book Now
                    </button>
                </div>
            </nav>
        </header>
    );
}
