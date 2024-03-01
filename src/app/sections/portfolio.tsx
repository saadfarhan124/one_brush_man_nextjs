import Image from "next/image";
import illustraion from "../../../public/main_bg.png";
import conceptArt from "../../../public/concept_art.png";
import comicBook from "../../../public/comicbook.png";
import characterDesign from "../../../public/chracter_design.png";
import digitalSculpting from "../../../public/digital_sculpting.png";


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
                    <div className="border-b border-red mx-auto" style={{ borderWidth: 2, width: "25%" }} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4" style={styles.centerContent}>
                <div className="relative cursor-pointer">
                    <Image className="object-cover object-center w-full h-full rounded-lg" src={illustraion} alt="" />
                    <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                        <div className="text-center md:text-right lg:mr-5">
                            <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                                Illustration
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-8 relative cursor-pointer">
                        <Image className="h-full max-w-full rounded-lg" src={conceptArt} alt="" />
                        <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                            <div className="text-center md:text-right lg:mr-5">
                                <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                                    Concept Art
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 relative cursor-pointer">
                        <Image className="h-full max-w-full rounded-lg" src={comicBook} alt="" style={{ objectFit: "cover" }} />
                        <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                            <div className="text-center">
                                <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                                    Comicbook
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-5 relative cursor-pointer">
                        <Image className="h-full max-w-full rounded-lg" src={characterDesign} alt="" />
                        <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                            <div className="text-center">
                                <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                                    Character Design
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 relative cursor-pointer">
                        <Image className="h-full max-w-full rounded-lg" src={digitalSculpting} alt="" style={{ objectFit: "cover" }} />
                        <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                            <div className="text-center md:text-right lg:mr-5">
                                <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                                    Digital Sculpting
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4"></div>
            </div>
        </div>
    )
}

export default Portfolio;