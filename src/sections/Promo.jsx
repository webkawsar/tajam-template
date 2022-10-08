import React, { useEffect } from "react";
import VenoBox from 'venobox';



const Promo = () => {

  useEffect(() => {

    new VenoBox({
      selector: '.venobox',
      spinner: 'flow',
      maxWidth: '600px',
      autoplay: false
    });

  }, [])


  return (
    <>
      <section id="video-part" name="promo">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 m-auto">
              <div className="video-icon text-center">
                <a
                  className="venobox"
                  data-vbtype="video"
                  title="tajam - template"
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
