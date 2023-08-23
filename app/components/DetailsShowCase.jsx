'use client';
import React from 'react';
import Image from 'next/image';
import s from '../Images/pre.png';
import c from '../Images/card.png';
import Button from './Button';
const DetailsShowCase = () => {
  return (
    <div className="Dettt">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-9">
            <div>
              <div className="imagePresentation">
                <Image src={s} alt="presentation" className="okokok" />
              </div>
              <div className="imagePresentation">
                <Image src={s} alt="presentation" className="okokok" />
              </div>
              <div className="imagePresentation">
                <Image src={s} alt="presentation" className="okokok" />
              </div>
              <div className="imagePresentation">
                <Image src={s} alt="presentation" className="okokok" />
              </div>
              <div className="imagePresentation">
                <Image src={s} alt="presentation" className="okokok" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 ">
            <div className="centered_man">
              <div className="p-3 cardssd">
                <div>
                  <Image src={c} className="sideLine" />
                </div>

                <div className="mt-4">
                  <div className="break">
                    <div className="fledo">
                      <div className="cardBkl">Booklib</div>
                      <div className="cardPrice">₦ 3,000</div>
                    </div>
                  </div>

                  <div className="giving">
                    <div className="p-3 infoCard">
                      Download more templates on Oneway Template. Subscribe to
                      get more amazing templates.
                    </div>
                  </div>

                  <div className="cardButton">
                    <Button type="largeButton">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            <div className="overView">Overview</div>
            <div className="Description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).
            </div>
            <div className="overView mt-5">Compatibility</div>
            <div className="Tool">XD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsShowCase;
