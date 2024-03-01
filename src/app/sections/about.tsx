const About = () => {
    const styles = {
        centerContent: {
            paddingLeft: "25%", paddingRight: "25%"
        }
    }
    return (
        <div id="about" style={styles.centerContent} className="pt-10 lg:pt-20 xl:pt-20">
            <div className="pt-20">
                <p className="text-center md:text-left text-lg md:text-2xl lg:text-3xl xl:text-3xl mb-2 font-extrabold">Saad Irfan</p>
                <div className="mx-auto md:mx-0 w-28 md:w-32 lg:w-40 border-b border-red" style={{ borderWidth: 2}} />

                <p className="pt-4 text-center md:text-left text-sm md:text-lg lg:text-xl xl:text-xl mb-2 font-normal	">Designer / Concept Artist</p>
                <p className="text-center md:text-left text-base font-normal	leading-6	" style={{ color: 'rgba(255, 255, 255, 0.40)' }}>As an artist with a background in traditional, abstract, and concept art, as well as theater,
                    I have a diverse range of experiences that inform my work. My skillset encompasses traditional and digital art, animation,
                    and UI/UX engineering, using tools such as Figma, Adobe Creative Suite, and Blender.
                    I am constantly exploring new technologies and techniques to expand my artistic expression and am currently focused on AI art.
                    I approach my art with a grounded and innovative mindset, always striving to create something fresh and unique.</p>
            </div>
        </div>
    )
}

export default About;