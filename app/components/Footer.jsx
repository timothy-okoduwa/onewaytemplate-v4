import React from 'react';
import './Components.css';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="holder">
      <div className="container">
        <div className="">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="vestarPlusRecognision">
                <a
                  href="https://vestarplus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  A product of VestarPlus ❤️
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 rightFooter">
              <div>Terms of Use</div>
              <div>Privacy Policy</div>
              <div>Disclaimer</div>
            </div>
            <div className="col-12 socials">
              <div>
                <a
                  href="https://www.instagram.com/onewaytemplate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <BsInstagram />
                </a>
              </div>
              <div>
                <BsFacebook />
              </div>
              <div>
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
