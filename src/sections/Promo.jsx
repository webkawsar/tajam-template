import React from "react";

const Promo = () => {
  return (
    <>
      <section id="video-part" name="promo">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 m-auto">
              <div className="video-icon text-center">
                <a
                  className="venobox"
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/9KqUlIY2Aew"
                >
                  <i className="fab fa-youtube video-i"></i>
                </a>

                <h3>WATCH OUR STORY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
