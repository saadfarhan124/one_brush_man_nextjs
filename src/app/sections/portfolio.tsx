"use client"
import Illustration from "./portfolio/illustrations";
import ConceptArt from "./portfolio/conceptArt";
import ComicBook from "./portfolio/comicBook";
import CharacterDesign from "./portfolio/characterDesign";
import DigitalSculpting from "./portfolio/digitalSculpting";
import ImageGallery from "../components/ImageGallery";
import { useState } from "react";

const Portfolio = () => {
    const styles = {
        portfolioFooterBg: {
            backgroundColor: "rgba(24, 24, 24, 0.71)", backdropFilter: "blur(5px)",
        },
        portfolioHeading: {
            display: "inline-block",
            borderBottom: "4px solid #DA0037"
        },

        centerContent: {
            paddingLeft: "25%", paddingRight: "25%"
        }
    }

    const characterImages: string[] = [
        '/character_bg/bg_1.png',
        '/character_bg/bg_2.png',
        '/character_bg/bg_3.png',
        '/character_bg/bg_4.png',
        '/character_bg/bg_5.png',
    ];
    const comicBookImages: string[] = [
        '/comicbook_bg/bg_1.png',
        '/comicbook_bg/bg_2.png',
        '/comicbook_bg/bg_3.png',
        '/comicbook_bg/bg_4.png',
    ];
    const conceptArtImages: string[] = [
        '/concept_art_bg/bg_1.png',
        '/concept_art_bg/bg_2.png',
        '/concept_art_bg/bg_3.png',
        '/concept_art_bg/bg_4.png',
        '/concept_art_bg/bg_5.png',
    ];
    const illustrationsImages: string[] = [
        "https://storage.googleapis.com/website_images_obm/illustrations/0002.jpg",
        "https://storage.googleapis.com/website_images_obm/illustrations/26171525_1648002488595933_1011977458215309354_o.jpg",
        "https://storage.googleapis.com/website_images_obm/illustrations/Azoth.jpg",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0001_Layer-13.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0002_Layer-12.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0003_Layer-11.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0004_Layer-10.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0008_Layer-8.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0040_print.png",
        "https://storage.googleapis.com/website_images_obm/illustrations/Chains%20of%20Mephetis%204000%20Finished%20v3.jpg",
        "https://storage.googleapis.com/website_images_obm/illustrations/Death%20Touch%20finished%20v4.jpg",
        "https://storage.googleapis.com/website_images_obm/illustrations/Destructive%20Deliberationt_4000px%20finished.jpg",
    ];
    const sculptingImages: string[] = [
        '/sculpting_bg/bg_1.png',
        '/sculpting_bg/bg_2.png',
        '/sculpting_bg/bg_3.png',
        '/sculpting_bg/bg_4.png',
        '/sculpting_bg/bg_5.png',
    ];

    const [openModal, setOpenModal] = useState(false);
    const [images, setImages] = useState(sculptingImages);

    // Function to handle click on Illustration to open modal
    const handleIllustrationClick = () => {
        setOpenModal(true);
        setImages(illustrationsImages);
    };

    // Function to handle click on ConceptArt to open modal
    const handleConceptArtClick = () => {
        setOpenModal(true);
        setImages(conceptArtImages);
    };

    // Function to handle click on CharacterDesign to open modal
    const handleCharacterDesignClick = () => {
        setOpenModal(true);
        setImages(characterImages);
    };

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div id="portfolio">
            <ImageGallery images={images} openModal={openModal} closeModal={closeModal} />

            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-center w-full justify-endx pt-20 md:pt-10 lg:pt-10 xl:pt-10">
                    <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl text-center mb-2 font-extrabold">Portfolio</p>
                    <div className="border-b border-red mx-auto w-28 lg:w-44" style={{ borderWidth: 2 }} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4" style={styles.centerContent}>
                <Illustration openGallery={handleIllustrationClick} />

                <div className="grid grid-cols-12 gap-3">
                    <ConceptArt openGallery={handleConceptArtClick} />
                    <ComicBook />
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <CharacterDesign openGallery={handleCharacterDesignClick} />
                    <DigitalSculpting />
                </div>
                <div className="pt-4"></div>
            </div>
        </div>
    )
}

export default Portfolio;