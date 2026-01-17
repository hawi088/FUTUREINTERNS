import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
