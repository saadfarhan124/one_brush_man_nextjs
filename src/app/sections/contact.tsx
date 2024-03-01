import Image from "next/image";
import contactLogo from "../../../public/logo_contact.png";

const Contact = () => {
    const styles = {
        centerContent: {
            paddingLeft: "25%", paddingRight: "25%"
        }
    }
    return (
        <div id="contact" style={styles.centerContent} className="pt-10 lg:pt-20 xl:pt-20 pb-20">
            <div className="pt-20">
                <p className="text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-2 font-extrabold	">Get In Touch</p>
                <div className="grid grid-cols-12 gap-3 p-15 pt-10">
                    <div className="col-span-12 md:col-span-6 relative">
                        {/* Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-base font-normal mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-black text-white border-gray-400 border p-2 rounded-md"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-base font-normal mb-2">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full bg-black text-white border-gray-400 border p-2 rounded-md"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-base font-normal mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full bg-black text-white border-gray-400 border p-2 rounded-md"
                            ></textarea>
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-center md:justify-start">
                            <button type="submit" className="bg-themegray text-white px-4 py-2 rounded-md hover:bg-red transition">Submit</button>
                        </div>
                    </div>
                    <div className="pt-5 md:pl-5  lg:pl-0 md:pt-0 col-span-12 md:col-span-6 relative cursor-pointer flex items-center lg:justify-center">
                        <Image className="w-60 rounded-lg" src={contactLogo} alt="" />
                    </div>
                </div>
            </div>
            {/* Social Icons Row */}
            <div className="flex items-center space-x-8 mt-4 pt-10 justify-center md:justify-start">
                {/* ArtStation Icon */}
                <a href="https://www.artstation.com/saadirfan" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Image src="/artstation.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="ArtStation" width={30} height={30} />
                </a>
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/saad-irfan-77a5481a/" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Image src="/linkedin.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="LinkedIn" width={30} height={30} />
                </a>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/saadvenomx" target="_blank" rel="noopener noreferrer" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    <Image src="/instagram.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="Instagram" width={30} height={30} />
                </a>
            </div>
        </div>
    )
}

export default Contact;