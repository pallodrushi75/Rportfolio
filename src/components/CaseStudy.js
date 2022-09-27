import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import Case1 from "../assets/img/case1.png";
import Case2 from "../assets/img/case2.png";
import inshort from "../assets/img/inshort.png";
import Case3 from "../assets/img/case3.webp";
import Proj2 from "../assets/img/proj2.png";
import Proj3 from "../assets/img/proj3.png";
import Footer from "../components/Footer";

const CaseStudy = () => {
  return (
    <Fragment>
      <div className="container section casestudy">

 
        <div className="row section">
          <div className="col-12 col-md-5">
            <img
              data-aos="flip-left"
              data-aos-duration="900"
              src={Case1}
              alt="Banking System"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="col-12 col-md-7"
          >
            <div>
              <p className="h1 title">Product Improvement - Bumble</p>
            </div>
            <div>
              <p className="justify-text-res lead">
              Designed Solutions to increase Date to Match ratio of the dating app.
Starting from user personas to finding solutions on the painpoints and then prioritizing features, it
was a team project.
Wireframing and deciding metrics was also a part of this project at the DoremonDen PM cohort
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1HEFXx_dH02AGbChYT6IS2zT7aC-Uldsg/view"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>


        <div className="row section">
        <div className="col-12 col-md-5">
            <img
              data-aos="flip-left"
              data-aos-duration="900"
              src={Case2}
              alt="Banking System"
              className="pr-image"
            />
          </div>
        <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="col-12 col-md-7"
          >
            <div>
              <p className="h1 title">Discord Innovative Features</p>
            </div>
            <div>
              <p className="justify-text-res lead">
              Select any B2C software product (app/web app) that you like the
most. Highlight the three most interesting and innovative features of
that product/platform. Indicate why you think it is innovative and
what value it offers to the end consumer and the business. Use your
style of presentation to complete your answers.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1mMl7fFKXhdTGhIW1m8p2tDeCLg3W-6TK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>


        </div>

        <div className="row section">
          <div className="col-12 col-md-5">
            <img
              data-aos="flip-left"
              data-aos-duration="900"
              src={inshort}
              alt="Banking System"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="col-12 col-md-7"
          >
            <div>
              <p className="h1 title">News Aggregator Platform </p>
            </div>
            <div>
              <p className="justify-text-res lead">
              There are multiple platforms providing different types of news.
Users have to hop through different platforms for different types of
news. There is a need for an intuitive new aggregator platform
where the user can decide which types of news they want from
which website/source.
                </p>
            </div>
            <div className="icons">


            </div>
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/19TFsrIBXKOXq2XjxWMBhIfgwaCMril-t/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          
          </div>
        </div>


      </div>

      <Footer />
    </Fragment>
  );
};

export default CaseStudy;
