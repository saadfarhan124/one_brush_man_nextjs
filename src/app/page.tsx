
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "./sections/navbar";
import Landing from "./sections/landing";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
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
