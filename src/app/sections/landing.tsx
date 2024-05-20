"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

import { TRANSITION_TIME } from '../constants';


const Landing = () => {
    const images = [
        "https://storage.googleapis.com/website_images_obm/landing/bg_1.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_10.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_11.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_12.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_13.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_2.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_3.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_4.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_5.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_6.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_7.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_8.png",
        "https://storage.googleapis.com/website_images_obm/landing/bg_9.png"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the image index, and wrap around to the first image if it exceeds the array length
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, TRANSITION_TIME); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt="Your Image Alt Text"
                    fill
                    className={`${index === currentImageIndex ? 'animate-zoom-in' : 'scale-110'}`} // Apply animation class or final scale class
                    style={{
                        opacity: index === currentImageIndex ? 1 : 0,
                        objectFit: "cover",
                        transition: 'opacity 2s ease-in-out',
                        objectPosition: 'center center', // Center the image content
                    }}
                />
            ))}

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black"></div>
            <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-2 font-extrabold text-white">Edit. Animate. Create.</p>
                <div className="w-72 md:w-3/6 xl:w-3/6 2xl:w-3/12 border-b border-red mx-auto" style={{ borderWidth: 2 }} />
            </div>
        </div>
    )
}

export default Landing;
