import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import Proj1 from "../assets/img/proj1.png";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <Fragment>
      <div className="container section">
        <div className="row section">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={Proj1}
              alt="Banking System"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6"
          >
            <div>
              <p className="h1 title">Basic Banking System</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is Basic Banking system where one can transact money and
                transactions will be reflected in transaction history modal
                along with the time of transfer.
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-html"
              ></div>
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-css"
              ></div>
              <div className="iconify" data-icon="logos:bootstrap"></div>
              <div className="iconify" data-icon="logos:javascript"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://pallodrushi75.github.io/WebDev_Task1/index.html"
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
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={Proj1}
              alt="Banking System"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6"
          >
            <div>
              <p className="h1 title">Basic Banking System</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is Basic Banking system where one can transact money and
                transactions will be reflected in transaction history modal
                along with the time of transfer.
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-html"
              ></div>
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-css"
              ></div>
              <div className="iconify" data-icon="logos:bootstrap"></div>
              <div className="iconify" data-icon="logos:javascript"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://pallodrushi75.github.io/WebDev_Task1/index.html"
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

export default Project;
