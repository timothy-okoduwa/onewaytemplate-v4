import React from 'react';
import mk1 from '../Images/mk1.png';
import Image from 'next/image';
import DownEmailCTA from './DownEmailCTA';
import Link from 'next/link';
const FullMockups = () => {
  return (
    <div className="flmkp">
      <div>
        <div className="mkup2">Mockups</div>
      </div>
      <div className="pusjed">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 ">
              <Link href="/details" style={{ textDecoration: 'none' }}>
                <div className="ghu">
                  <div className="cards">
                    <Image
                      src={mk1}
                      alt="card_images"
                      className="cardImageStyle"
                    />
                  </div>
                  <div className="cardName">Envelope Mockup</div>
                  <div className="priceTag">Free</div>
                  <div className="Type">psd</div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-4 mb-5 ">
              <div className="ghu">
                <div className="cards">
                  <Image
                    src={mk1}
                    alt="card_images"
                    className="cardImageStyle"
                  />
                </div>
                <div className="cardName">Envelope Mockup</div>
                <div className="priceTag">Free</div>
                <div className="Type">psd</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5 ">
              <div className="ghu">
                <div className="cards">
                  <Image
                    src={mk1}
                    alt="card_images"
                    className="cardImageStyle"
                  />
                </div>
                <div className="cardName">Envelope Mockup</div>
                <div className="priceTag">Free</div>
                <div className="Type">psd</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smaez">
        <DownEmailCTA />
      </div>
    </div>
  );
};

export default FullMockups;
