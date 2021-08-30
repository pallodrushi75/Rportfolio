import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import Footer from "../components/Footer";

const Education = () => {
  return (
    <Fragment>
      <div className="container section">
        <div className="h1 title">Qualifications</div>
        {/* PICT */}
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="card edu-card mt-5"
        >
          <div className="card-body">
            <div className="edu-info">
              <h3 className="college">
                Pune Institute of Computer Technology, Pune
              </h3>
              <div className="num-font-year">2019 - 2023</div>
              <div className="mt-2 marks">
                CGPA : <span className="num-font-marks">9.64</span>
              </div>
            </div>
            <div className="qualification">BE</div>
          </div>
        </div>
        {/* HSC */}
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="card edu-card mt-5"
        >
          <div className="card-body">
            <div className="edu-info">
              <h3 className="college">Bhagat Public School, Kota</h3>
              <div className="num-font-year">2018 - 2019</div>
              <div className="mt-2 marks">
                HSC : <span className="num-font-marks">88</span> %
              </div>
            </div>
            <div className="qualification">HSC</div>
          </div>
        </div>
        {/* SSC */}
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="card edu-card mt-5 mb-5"
        >
          <div className="card-body">
            <div className="edu-info">
              <h3 className="college">
                Shevgaon English Medium School, Shevgaon
              </h3>
              <div className="num-font-year">2016 - 2017</div>
              <div className="mt-2 marks">
                SSC : <span className="num-font-marks">94.6</span> %
              </div>
            </div>
            <div className="qualification">SSC</div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Education;
