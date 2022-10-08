import React from "react";
import Slider from "react-slick";
import Typed from "react-typed";

const Main = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const typedStrings = [
    "Complete JavaScript Developer",
    "Complete React Developer",
    "Complete Node.js Developer",
    "Complete MERN Stack Developer",
  ];

  const options = {
    stringsElement: null,
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
    loopCount: 100,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: "html",
  };

  return (
    <>
      <section id="banner-part" name="main">
        <div className="container">
          <div className="row banner-slider">
            <Slider {...settings}>
              <div className="col-lg-10 m-auto">
                <div className="banner-text text-center">
                  <h2>
                    We Are{" "}
                    <span className="typed">
                      <Typed strings={typedStrings} {...options} />
                    </span>
                  </h2>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                  </p>
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="col-lg-10 m-auto">
                <div className="banner-text text-center">
                  <h2>Complete Front End development</h2>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                  </p>
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="col-lg-10 m-auto">
                <div className="banner-text text-center">
                  <h2>Complete back End development</h2>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                  </p>
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="col-lg-10 m-auto">
                <div className="banner-text text-center">
                  <h2>Complete Ghraphics Design</h2>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit.
                  </p>
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
