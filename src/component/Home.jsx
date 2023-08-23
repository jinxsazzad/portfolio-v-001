import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="container px-10 mx-auto ">
        <About />
        <Skills />
        <Portfolio />
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
