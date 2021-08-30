import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import Proj1 from "../assets/img/proj1.png";
import { render } from "react-dom";
import Footer from "../components/Footer";

const Home = () => {
  const homeGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: homeGIF.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/developer.json")
    });
  }, []);

  return (
    <Fragment>
      <div className="home">
        <div className="container">
          {/* Main Home */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="row greeting"
          >
            {/* Greetings Text */}
            <div className="greeting-para col-12 col-md-7">
              <div className="greeting-text margin_b-res mt-6 mb-5">
                <div className="h3 greeting-text__hi">Hi There !</div>
                <div className="h1 greeting-text__name">
                  I'm Rushikesh Pallod
                </div>
                <div className="greeting-text__bio text-center">
                  Web Developer | Competitive Programmer
                </div>
              </div>

              {/* Social Media */}
              <div className="d-flec  justify-content-center ml-4">
                <a
                  href="https://www.linkedin.com/in/rushikesh-pallod/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social fa fa-linkedin-square"></i>
                </a>
                <a href="mailto:pallodrushikesh75@gmail.com">
                  <i className="social fa fa-envelope-square"></i>
                </a>
              </div>
            </div>
            {/*Greetings SVG */}
            <div className="col-12 col-md-5">
              <div className="homeGIF" ref={homeGIF}></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
