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
            paddingLeft: "25%", paddingRight: "25%",
            backgroundColor: "black"
        }
    }

    const characterImages: string[] = [
        'https://storage.googleapis.com/website_images_obm/character_design/CD 3.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(Scifi)-01-copy_0002_page-13.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(Scifi)-01-copy_0003_page-14.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(Scifi)-01-copy_0011_page-16.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(Scifi)-01-copy_0012_page-15.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0032_Layer-7.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0033_Layer-6.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0034_Layer-5.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0035_Layer-4.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0036_Layer-3.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0037_Layer-2.png',
        'https://storage.googleapis.com/website_images_obm/character_design/CD-(fantasy)-02_0046_Hob-goblin-_final.png',
        'https://storage.googleapis.com/website_images_obm/character_design/Giantess finished.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/Goblin_Camera 1_FullQuality_002.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/IMP_FullQuality.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/JJ_concept art.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/Karete guy FINIHED 5.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/Madusa_FullQualityv2.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/Tigermanwip_finished.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/ar.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/artist.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/character-Finished.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/cooper v3.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/dragonborn 2.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/dwarf 5.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/fighter 4.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/green wizardfinished.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/lich kin_finished.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/lichking tbrender_002.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/saad-irfan-charcters.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/sax-irfan-axolotl.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/sax-irfan-gladiator-02.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/sax-irfan-god-of-thunder3.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/sax-irfan-got-recovered.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/sax-irfan-horus.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/tbrender_Camera 1_FullQuality.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/titan tbrender_Camera 1_FullQuality.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/victorian carnival04.jpg',
        'https://storage.googleapis.com/website_images_obm/character_design/warrior.jpg',
    ];
    const comicBookImages: string[] = [
        'https://storage.googleapis.com/website_images_obm/comic_book/01.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/02.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/03.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/04.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/05.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/06.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/07.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/08.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/09.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/1.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/10.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/11 (2).jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/11.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/12.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/19.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/2.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/20.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/3.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/32.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/43.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/48.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/49.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/86.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/90.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/Wes_2018-05-09_Shaded.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/page 05-done.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/page two_chank2.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/pagethree_final02.jpg',
        'https://storage.googleapis.com/website_images_obm/comic_book/sample page finished.jpg',
    ];
    const conceptArtImages: string[] = [
        'https://storage.googleapis.com/website_images_obm/Concept art/Lab Finished 2.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/Szába Lizard _finished.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/Wolf1.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/manshion_01.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/manshion_assets.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/rockpool_finished.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/saad-irfan-cfr023.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/saad-irfan-minetor.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/sax-irfan-fish-guy.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/sax-irfan-griffen.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/sax-irfan-quetzalcoatl.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/sax-irfan-rokh.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/sax-irfan-tiger-done.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/shark done.jpg',
        'https://storage.googleapis.com/website_images_obm/Concept art/wip.jpg',
    ];
    const illustrationsImages: string[] = [
        'https://storage.googleapis.com/website_images_obm/illustrations/0002.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/26171525_1648002488595933_1011977458215309354_o.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Azoth.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0001_Layer-13.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0002_Layer-12.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0003_Layer-11.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0004_Layer-10.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0008_Layer-8.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/CD-(fantasy)-02_0040_print.png',
        'https://storage.googleapis.com/website_images_obm/illustrations/Chains of Mephetis 4000 Finished v3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Death Touch finished v4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Destructive Deliberationt_4000px finished.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Dust from the Stillwater ShrineSchedule sent 4000px.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Guardian of fate3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Ice dragon_finished.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Man n horse.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Mystery Babylon Terrain Overlay_half size.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Passing MIrage v5 4000px.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Performance Bonus 10.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Potion of Deja Vu 4000px fnished.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Rum label Pirate_finished_sendv3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Sedate finished v4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Smilodon 4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Sonata Arcanix 4000px_7.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Staining Sumi v4 4000px.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Wreck Havoc-Finished as.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/Zulu web.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/azreil.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/blessing_of_salvation Finished v2.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/haze_bending v8 4000px.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/lhw3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/rider.748 wip4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/risea bove 4000px_v5.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-antares-00.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-apes.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-celtic-web1.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-cover-2.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-cover003.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-ddghost.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-flot02.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-fortuna.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-gladiator-web.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-nemesis.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-regulus-00.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-scene-1-v3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-scene-3-soarer-tallons-wip-4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-scene-6-saboteur4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-shaman-okc.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-sirius.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-spica-00.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-fool-ch.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-grey-elf.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-hermit-new.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-high-priestess-new4.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-star-ch3.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-villans.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-the-watcher.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-victory.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sax-irfan-wheel-of-fortune-new.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/sonata_fantasmia  finished 2.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/song of the rosen matador finished v2.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/song of the shining knight Finished v2.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/tbrender_Camera 1_FullQuality_v6.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/tbrender_FullQuality_003.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/team_v5.jpg',
        'https://storage.googleapis.com/website_images_obm/illustrations/war Complete.jpg',

    ];
    const sculptingImages: string[] = [
        'https://storage.googleapis.com/website_images_obm/sculpting/1.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/4.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Clean_beachCam.0633.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/Dark_Beach_cam.0062.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/Dark_Beach_cam.0528.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/Dark_Beach_cam.0980.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0000_Group 12.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0001_Group 11.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0002_Group 8.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0003_Group 10.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0004_Group 9.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0005_turntabletigerSequence.0269.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0006_turntabletigerSequence.0227.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0007_turntabletigerSequence.0203.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0008_turntabletigerSequence.0167.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0009_turntabletigerSequence.0143.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0010_turntabletigerSequence.0119.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0011_turntabletigerSequence.0095.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0012_turntabletigerSequence.0053.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0013_turntabletigerSequence.0000.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0014_Group 14.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0015_Group 13.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0016_Untitled-1_0041_Group 17.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0017_treasure chest.12.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0018_Shiz 05_posed.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0019_Shiz 04 wip.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0020_screenshot020 (2).jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0021_sax-irfan-characterstrip-herc.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0022_CharacterStripcc3.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0023_CharacterStrip.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0024_CharacterStrip_final.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0025_CharacterStrip 10.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0026_Digtal Sculpting-01_0025_sax-irfan-highresscreenshot00019.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0027_Digtal Sculpting-01_0024_sax-irfan-highresscreenshot00018.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0028_Digtal Sculpting-01_0023_sax-irfan-nimer-aslam-untitled-1-3-2.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0029_Digtal Sculpting-01_0022_sax-irfan-nimer-aslam-highresscreenshot00017.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0030_Digtal Sculpting-01_0021_sax-irfan-highresscreenshot00020.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0031_Group 7.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0032_Group 5.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0033_Group 6.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0034_Group 1.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0035_Group 2.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0036_Group 3.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0037_Group 4.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0038_untitled.260.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0039_untitled.259.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0040_untitled.257.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0041_untitled.256.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0042_untitled.255.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0043_untitled.254.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0044_untitled.253.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0045_untitled.252.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0046_untitled.251.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0047_cyclopes.250.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0048_cyclopes.249.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/Digital sculpting_source_0049_Background.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0000.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0022.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0068.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0082.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0126.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/NewLevelSequence1.0188.png',
        'https://storage.googleapis.com/website_images_obm/sculpting/ZBrush Document.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/ZBrush Document10.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/ZBrush Document11.jpg',
        'https://storage.googleapis.com/website_images_obm/sculpting/ZBrush Document2.jpg',
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

    // Function to handle click on Digital Sculpting to open modal
    const handleDigitalSculptingClick = () => {
        setOpenModal(true);
        setImages(sculptingImages);
    };

    // Function to handle click on ComicBook to open modal
    const handleComicBookClick = () => {
        setOpenModal(true);
        setImages(comicBookImages);
    };

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div id="portfolio" style={{backgroundColor: "black"}}>
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
                    <ComicBook openGallery={handleComicBookClick} />
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <CharacterDesign openGallery={handleCharacterDesignClick} />
                    <DigitalSculpting openGallery={handleDigitalSculptingClick} />
                </div>
                <div className="pt-4"></div>
            </div>
        </div>
    )
}

export default Portfolio;