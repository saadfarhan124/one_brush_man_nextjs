"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import bgOne from "../../../public/landing_bg/bg_1.png";
import bgTwo from "../../../public/landing_bg/bg_2.png";
import bgThree from "../../../public/landing_bg/bg_13.png";
import bgFour from "../../../public/landing_bg/bg_3.png";
import bgFive from "../../../public/landing_bg/bg_4.png";
import bgSix from "../../../public/landing_bg/bg_5.png";
import bgSeven from "../../../public/landing_bg/bg_6.png";
import bgEight from "../../../public/landing_bg/bg_7.png";
import bgNine from "../../../public/landing_bg/bg_8.png";
import bgTen from "../../../public/landing_bg/bg_9.png";
import bgEleven from "../../../public/landing_bg/bg_10.png";
import bgTwelve from "../../../public/landing_bg/bg_11.png";
import bgThirteen from "../../../public/landing_bg/bg_12.png";



const Landing = () => {
    const images = [bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix, bgSeven, bgEight, bgNine, bgTen, bgEleven, bgTwelve, bgThirteen]; // Replace with your image paths
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the image index, and wrap around to the first image if it exceeds the array length
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt="Your Image Alt Text"
                    layout="fill"
                    objectFit="cover"
                    style={{
                        opacity: index === currentImageIndex ? 1 : 0,
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
