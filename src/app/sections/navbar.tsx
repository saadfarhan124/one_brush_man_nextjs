"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import navLogo from "../../../public/logo.png";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        const navbar = document.querySelector('nav');

        if (section && navbar) {
            const offset = navbar.offsetHeight; // Adjust this value as needed
            const offsetTop = section.offsetTop - offset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    const navbarClasses = `flex flex-col items-center p-4 sm:pb-4 sm:px-8 
    md:flex-row md:justify-between md:items-center md:pb-2 md:px-16 
    lg:flex-row lg:justify-between lg:items-center lg:pb-2 lg:px-24 
    xl:flex-row xl:justify-between xl:items-center xl:pb-2 xl:px-32 text-white 
    w-full z-50 sticky top-0 transition-all ${scrolled ? 'bg-black pt-5' : 'bg-transparent pt-20'}`;

    const styles = {
        centerContent: {
            paddingLeft: "25%", paddingRight: "25%"
        }
    }

    return (
        <nav style={styles.centerContent} className={navbarClasses}>
            <div className="flex items-center mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                <Image src={navLogo} alt="Logo" width={200} height={50} />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center h-full">
                {/* Menu button for mobile */}
                <div className="md:hidden lg:hidden xl:hidden">
                    <button
                        onClick={handleMenuClick}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {menuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
                {/* Navigation links */}
                <div
                    className={`${menuOpen ? 'block' : 'hidden'
                        } md:flex lg:flex xl:flex flex-col md:flex-row lg:flex-row xl:flex-row items-center w-full md:w-auto lg:w-auto xl:w-auto`}
                >
                    <a
                        onClick={() => scrollToSection('portfolio')}
                        className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red cursor-pointer"
                    >
                        Portfolio
                    </a>
                    <a
                        onClick={() => scrollToSection('about')}
                        className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red cursor-pointer"
                    >
                        About
                    </a>
                    <a
                        onClick={() => scrollToSection('contact')}
                        className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red cursor-pointer"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
