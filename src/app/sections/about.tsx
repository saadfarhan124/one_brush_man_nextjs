const About = () => {
    const styles = {
        centerContent: {
            paddingLeft: "25%", paddingRight: "25%",
            backgroundColor: "black"
        }
    }
    return (
        <div id="about" style={styles.centerContent} className="pt-10 lg:pt-20 xl:pt-20">
            <div className="pt-20">
                <p className="text-center md:text-left text-lg md:text-2xl lg:text-3xl xl:text-3xl mb-2 font-extrabold">Saad Irfan</p>
                <div className="mx-auto md:mx-0 w-28 md:w-32 lg:w-40 border-b border-red" style={{ borderWidth: 2 }} />

                <p className="pt-4 text-center md:text-left text-sm md:text-lg lg:text-xl xl:text-xl mb-2 font-normal	">Concept Art & Illustration</p>
                <p className="text-center md:text-left text-base font-normal	leading-6	" style={{ color: 'rgba(255, 255, 255, 0.40)' }}>Fifteen years and countless projects later, I am Saad Irfan; widely known as a concept artist,
                    3D modeler and character illustrator. From painting backgrounds for the internationally acclaimed 2D animated feature film,
                    The Glassworker to illustrating the Flesh & Blood card games, I bring a variety of skills, techniques and experiences that will bring your concept to life.
                    Oh, I am also an excellent communicator who’s maintained long-term relationships with clients I’ve never met in real life (remote worker for the win!).
                    If you need proof, take a look at some of the athletic gear I’ve been designing for my folks at Habrok (based out of US) and my recently published full-scale graphic novel, 
                    The Secret Life of Cooper Bennett. This is just to name a few of my favorites, get in touch to see how I can help you bring your vision to life through concept art, 
                    3D modelling and illustrations!</p>
            </div>
        </div>
    )
}

export default About;