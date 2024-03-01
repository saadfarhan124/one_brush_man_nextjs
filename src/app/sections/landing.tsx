import Image from "next/image";
import illustraion from "../../../public/main_bg.png";

const Landing = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <Image
                src={illustraion}
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-2 font-extrabold text-white">Edit. Animate. Create.</p>
                <div className="w-72 md:w-3/6 xl:w-3/6 2xl:w-3/12 border-b border-red mx-auto" style={{ borderWidth: 2 }} />
            </div>

        </div>

    )
}
export default Landing;
