import React from "react";
import Slider from "react-slick";

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

  return (
    <>
      <section id="banner-part" name="main">
        <div className="container">
          <div className="row banner-slider">
            <Slider {...settings}>
              <div className="col-lg-10 m-auto">
                <div className="banner-text text-center">
                  <h2>
                    We Are <span className="typed"></span>
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
