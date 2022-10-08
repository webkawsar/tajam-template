import React from "react";
import styled, { css } from "styled-components";

const H2Styled = styled.h2`
  color: #413d4b;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0 !important;
  padding-bottom: 30px;
  span {
    text-transform: lowercase
  }
  span:hover {
    text-transform: uppercase
  }
  &&:hover {
    color: green;
  }

  ${props => props.about && css`
    color: red
  `}
`;

const About = () => {
  return (
    <>
      <section id="about-part" name="about">
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
                <H2Styled about='true'>OUR STORY <span>Hi</span></H2Styled>
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
