import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import Footer from "../components/Footer";

const ContactMe = () => {
  const contactGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: contactGIF.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/info.json")
    });
  }, []);

  return (
    <Fragment>
      <div className="container contact">
        <div className="col 12 col-md-6">
          <div className="contactGIF" ref={contactGIF}></div>
        </div>
        <div className="col 12 col-md-6">
          <div className="h1 greeting-text__name">Contact Me</div>
          <div className="cardcontacts">
            <p>
              I am active on many social media platforms. Feel free to reach me
              and i would be more than happy to help if your doubt belongs to my
              domain of interest.
            </p>
          </div>
        </div>
      </div>

      <div className="container col 12">
        <div className="cinfo">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="h2 text-center">Get in Touch !</div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1200">
            <div className="h5 text-center">
              <a href="mailto:pallodrushikesh75@gmail.com">
                <i className="fa fa-envelope email-icon"></i>
              </a>
              pallodrushikesh75@gmail.com
            </div>
          </div>
          <div className="social-media mt-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="font-small h2 text-center"
            >
              <strong>Social Media</strong>
            </div>
            <div className="social-icons mt-3 d-flex justify-content-center">
              <a
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
                href="http://www.linkedin.com/in/rushikesh-pallod"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin linkedin-icon mr-3"></i>
              </a>
              <a
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
                href="https://www.instagram.com/rushi.pallod"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram instagram-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactMe;
