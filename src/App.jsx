import About from "./Component/3-About/About";
import Hero from "./Component/2-Hero/Hero";

import Contact from "./Component/5-Contact/Contact";
import MyWork from "./Component/4-MyWork/MyWork";
import Navbar from "./Component/1-Navbar/Navbar";
import Footer from "./Component/6-Footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });
  return (
    <div id="up">
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up">
        <button
          style={{ opacity: showBtn ? 1 : 0, transition: "1s" }}
          className="icon-keyboard_arrow_up scrol2top"></button>
      </a>
    </div>
  );
};

export default App;
