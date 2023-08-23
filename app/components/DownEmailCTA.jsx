'use client';
import React from 'react';
import './Components.css';
import Button from './Button';
import Inputs from './Inputs';
const DownEmailCTA = () => {
  return (
    <div className="CTABackground">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              <div className="container px-5 h-100 d-flex justify-content-center align-items-center">
                <div className="row ">
                  <div className="col-12 col-lg-6  leftCTA">
                    <div>Be the first to know when we add new templates</div>
                  </div>
                  <div className="col-12 col-lg-6 ">
                    <div className=" RightCTA">
                      <div className="InputWidth">
                        <Inputs
                          type="email"
                          Type="invincibleInput"
                          placeholder="Enter Email"
                        />
                      </div>

                      <div className="ButonWidth">
                        <Button type="subscriptionCTAButton">Send</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownEmailCTA;
