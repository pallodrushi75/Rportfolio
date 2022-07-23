import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import { render } from "react-dom";
import Proj1 from "../assets/img/proj1.png";
import Proj2 from "../assets/img/proj2.png";
import Proj3 from "../assets/img/proj3.png";
import Footer from "../components/Footer";

const CaseStudy = () => {
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
        <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6"
          >
            <div>
              <p className="h1 title">Github Search</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                This is a simple site where one can enter anyone's gtihub username and get data of all the public repos of that user.
                
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
              <div className="iconify" data-icon="vscode-icons:file-type-reactjs"></div>
            </div>
            <div className="mt-8">
              <a
                href="https://reactgraphql.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  Link
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={Proj2}
              alt="Banking System"
              className="pr-image"
            />
          </div>

        </div>

        <div className="row section">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={Proj3}
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
              <p className="h1 title">Hand Gesture Controlled Media</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                A hardware project using ultrasonic sensors and arduino UNO to detect hand movements and using the detected data to control certain functions of VLC media player such as play/pause, forward/rewind and volume increase/decrease with the help of python and pyautogui.
              </p>
            </div>
            <div className="icons">
              <div
                className="iconify"
                data-icon="logos:python"
              ></div>
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-arduino"
              ></div>

            </div>
            <div className="mt-8">

            </div>
          </div>
        </div>


      </div>

      <Footer />
    </Fragment>
  );
};

export default CaseStudy;
