import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import pp from "../assets/img/pp.jpeg";
import Footer from "../components/Footer";

const AboutMe = () => {
  const aboutGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: aboutGIF.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/profile.json")
    });
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="container section">
          {/* Home Bio */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="row"
          >
            <div className="row mt-5">
              <div className="col-12 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="bio card  mb-5 p-3"
                >
                  <p className="lead card-body">
                    <p>
                      Team player with strong communication skills and an
                      analytical and problem solving attitude. Highly motivated
                      individual with leadership skills.
                    </p>
                    <p>
                      Currently pursuing Bachelor's Degree in Electronics and
                      Telecommunication Engineering from Pune Institute of
                      Computer Technology.
                    </p>

                    <div class="lead btn1 from-left " href="">
                      Resume
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="homeGIF" ref={aboutGIF}></div>
              </div>
            </div>

            <div className="container tools">
              <div className="col 12 col-md-6">
                <div className="h2 category mt-5 ">Tech Stack :</div>
                <div className="description">
                  <div className="icons mt-4">
                    <div
                      className="iconify"
                      data-icon="vscode-icons:file-type-html"
                    ></div>
                    <div
                      className="iconify"
                      data-icon="vscode-icons:file-type-css"
                    ></div>
                    <div
                      className="iconify"
                      data-icon="vscode-icons:file-type-sass"
                    ></div>
                    <div className="iconify" data-icon="logos:javascript"></div>
                    <div
                      className="iconify"
                      data-icon="vscode-icons:file-type-reactjs"
                    ></div>
                    <div className="iconify" data-icon="logos:bootstrap"></div>
                  </div>
                </div>
              </div>

              <div className="col 12 col-md-6">
                <div className="h2 category mt-5">Programming Languages : </div>

                <div
                  className="iconify"
                  data-icon="vscode-icons:file-type-cpp"
                ></div>

                <div
                  className="iconify"
                  data-icon="vscode-icons:file-type-python"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AboutMe;
