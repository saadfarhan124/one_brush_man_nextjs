import Image from "next/image";
import illustraion from "../../../public/main_bg.png";
import conceptArt from "../../../public/concept_art.png";
import comicBook from "../../../public/comicbook.png";
import characterDesign from "../../../public/chracter_design.png";
import digitalSculpting from "../../../public/digital_sculpting.png";
import Illustration from "./portfolio/illustrations";
import ConceptArt from "./portfolio/conceptArt";
import ComicBook from "./portfolio/comicBook";
import CharacterDesign from "./portfolio/characterDesign";
import DigitalSculpting from "./portfolio/digitalSculpting";


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
    return (
        <div id="portfolio">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-center w-full justify-endx pt-20 md:pt-10 lg:pt-10 xl:pt-10">
                    <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl text-center mb-2 font-extrabold">Portfolio</p>
                    <div className="border-b border-red mx-auto w-28 lg:w-44" style={{ borderWidth: 2 }} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4" style={styles.centerContent}>
                <Illustration />

                <div className="grid grid-cols-12 gap-3">
                    <ConceptArt />
                    <ComicBook />
                </div>
                <div className="grid grid-cols-12 gap-3">
                   <CharacterDesign />
                   <DigitalSculpting />
                </div>
                <div className="pt-4"></div>
            </div>
        </div>
    )
}

export default Portfolio;