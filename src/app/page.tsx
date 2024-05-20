
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./sections/navbar";
import Landing from "./sections/landing";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

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
      <Navbar />
      <Landing />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <SpeedInsights />

    </main>
  );
}



// filter: invert(13%) sepia(97%) saturate(5159%) hue-rotate(338deg) brightness(83%) contrast(109%)