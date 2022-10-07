import React from "react";

const About = () => {
  return (
    <>
      <section id="about-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-img text-center">
                <img
                  src="/img/big-logo.png"
                  alt="image not found"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-text">
                <h2>OUR STORY</h2>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                </p>
                <p>
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio. Sed non mauris vitae erat consequat
                  auctor eu in elit. className aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <a href="#">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
