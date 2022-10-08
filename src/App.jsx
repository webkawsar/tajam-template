import React from "react";
import Layout from "./components/layout/Layout";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";
import Portfolio from "./sections/Portfolio";
import Promo from "./sections/Promo";
import Service from "./sections/Service";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";
// Import css files for slider
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <>
      <Layout>
        <Main />
        <About />
        <Promo />
        <Service />
        <Team />
        <Portfolio />
        <Testimonial />
        <Contact />
        <ScrollToTop />
      </Layout>
    </>
  );
};

export default App;
