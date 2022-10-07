import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light stciky-top">
        <div className="container ms">
          <a className="navbar-brand" href="#">
            <img
              src="img/main-logo.png"
              alt="main-logo"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="main"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="promo"
                >
                  VIDEO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="services"
                >
                  EXPERTISE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="team"
                >
                  TEAMS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="project"
                >
                  WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="testimonial"
                >
                  PEOPLE SAY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  className="nav-link"
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
