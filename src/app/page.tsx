import Image from "next/image";

export default function Home() {
  const styles = {
    landingImage: {
      backgroundImage: "url('/main_bg.png')", backgroundSize: "cover", backgroundPosition: "center"
    },
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

    <main>
      {/* Landing */}
      <div className="flex flex-col items-center justify-between min-h-screen" style={styles.landingImage}>
        {/* Navbar */}
        <nav className="flex flex-col items-center p-4 sm:pt-8 sm:pb-4 sm:px-8 md:flex-row md:justify-between md:items-center md:pt-12 md:pb-6 md:px-16 lg:flex-row lg:justify-between lg:items-center lg:pt-16 lg:pb-8 lg:px-24 xl:flex-row xl:justify-between xl:items-center xl:pt-20 xl:pb-10 xl:px-32 text-white w-full sticky top-0 sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent">
          <div className="flex items-center mb-4 md:mb-0 lg:mb-0 xl:mb-0">
            <Image src="/logo.png" alt="Logo" width={200} height={50} />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center h-full">
            <a href="#" className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red">Portfolio</a>
            <a href="#" className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red">About</a>
            <a href="#" className="mx-2 my-2 md:my-0 lg:my-0 xl:my-0 text-lg font-bold transition-all hover:text-red">Contact</a>
          </div>
        </nav>
        {/* Text and line at the bottom */}
        <div className="flex flex-col items-center w-full justify-end pb-4 text-center">
          <p className="text-2xl md:text-4xl lg:text-6xl xl:text-6xl mb-2 font-extrabold">Edit. Animate. Create.</p>
          <div className="w-2/3 border-b border-red mx-auto" style={{ borderWidth: 2 }} />
        </div>
      </div>

      {/* Portfolio */}
      <div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center w-full justify-endx pt-20 md:pt-10 lg:pt-10 xl:pt-10">
            <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl text-center mb-2 font-extrabold">Portfolio</p>
            <div className="border-b border-red mx-auto" style={{ borderWidth: 2, width: "25%" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4" style={styles.centerContent}>
          <div className="relative cursor-pointer">
          <img className="object-cover object-center w-full h-full rounded-lg" src="/main_bg.png" alt="" />
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
              <img className="h-full max-w-full rounded-lg" src="/concept_art.png" alt="" />
              <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                <div className="text-center md:text-right lg:mr-5">
                  <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                    Concept Art
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 relative cursor-pointer">
              <img className="h-full max-w-full rounded-lg" src="/comicbook.png" alt="" style={{ objectFit: "cover" }} />
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
              <img className="h-full max-w-full rounded-lg" src="/chracter_design.png" alt="" />
              <div className="absolute bottom-0 right-0 w-full md:p-5" style={styles.portfolioFooterBg}>
                <div className="text-center">
                  <p className="text-white font-bold md:text-1xl lg:text-2xl" style={styles.portfolioHeading}>
                    Character Design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 relative cursor-pointer">
              <img className="h-full max-w-full rounded-lg" src="/digital_sculpting.png" alt="" style={{ objectFit: "cover" }} />
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

      {/* About  */}
      <div style={styles.centerContent} className="pt-10 lg:pt-20 xl:pt-20">
        <div className="pt-20">
          <p className="text-center md:text-left text-lg md:text-2xl lg:text-3xl xl:text-3xl mb-2 font-extrabold" style={{}}>Saad Irfan</p>
          <p className="text-center md:text-left text-sm md:text-lg lg:text-xl xl:text-xl mb-2 font-normal	">Designer / Concept Artist</p>
          <p className="text-center md:text-left text-base font-normal	leading-6	" style={{ color: 'rgba(255, 255, 255, 0.40)' }}>As an artist with a background in traditional, abstract, and concept art, as well as theater,
            I have a diverse range of experiences that inform my work. My skillset encompasses traditional and digital art, animation,
            and UI/UX engineering, using tools such as Figma, Adobe Creative Suite, and Blender.
            I am constantly exploring new technologies and techniques to expand my artistic expression and am currently focused on AI art.
            I approach my art with a grounded and innovative mindset, always striving to create something fresh and unique.</p>
        </div>
      </div>

      {/* Get In Touch  */}
      <div style={styles.centerContent} className="pt-10 lg:pt-20 xl:pt-20 pb-20">
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
              <img className="w-60 rounded-lg" src="/logo_contact.png" alt="" />
            </div>
          </div>
        </div>
        {/* Social Icons Row */}
        <div className="flex items-center space-x-8 mt-4 pt-10 justify-center md:justify-start">
          {/* ArtStation Icon */}
          <Image src="/artstation.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="ArtStation" width={30} height={30} />

          {/* LinkedIn Icon */}
          <Image src="/linkedin.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="LinkedIn" width={30} height={30} />

          {/* Instagram Icon */}
          <Image src="/instagram.svg" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" alt="Instagram" width={30} height={30} />
        </div>
      </div>
      <footer className="bg-themedarkgray py-4 text-center">
        <p className="text-themegray">&copy; 2024 One Brush Man</p>
      </footer>
    </main>
  );
}



// filter: invert(13%) sepia(97%) saturate(5159%) hue-rotate(338deg) brightness(83%) contrast(109%)