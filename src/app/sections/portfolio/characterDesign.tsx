"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import bgTwo from "../../../../public/character_bg/bg_1.png";
import bgThree from "../../../../public/character_bg/bg_2.png";
import bgFour from "../../../../public/character_bg/bg_3.png";
import bgFive from "../../../../public/character_bg/bg_4.png";
import bgSix from "../../../../public/character_bg/bg_5.png";
import { TRANSITION_TIME, PortfolioProps } from '@/app/constants';


const CharacterDesign: React.FC<PortfolioProps> = ({openGallery}) => {
    const images = [bgTwo, bgThree, bgFour, bgFive, bgSix]; // Replace with your image paths
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOpacity(0); // Set opacity to 0 for the fade-out effect
            setTimeout(() => {
                // Increment the image index, and wrap around to the first image if it exceeds the array length
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setOpacity(1); // Set opacity back to 1 for the fade-in effect
            }, 800); // Adjust the duration for the fade-out effect (in milliseconds)
        }, TRANSITION_TIME); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [currentImageIndex, images.length]);

    const styles = {
        portfolioFooterBg: {
            backgroundColor: "rgba(24, 24, 24, 0.71)", backdropFilter: "blur(5px)",
        },
        portfolioHeading: {
            display: "inline-block",
            borderBottom: "4px solid #DA0037"
        },
    }
    return (
        <div className="col-span-12 md:col-span-5 relative cursor-pointer" onClick={openGallery}>
            <Image
                src={images[currentImageIndex]}
                alt="Your Image Alt Text"
                className="object-cover object-center h-full max-w-full rounded-lg"
                style={{
                    opacity: opacity,
                    transition: 'opacity 1s ease-in-out',
                }}
            />        
            <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                <div className="text-center">
                    <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                        Character Design
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CharacterDesign;