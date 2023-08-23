import React from 'react';
import Image from 'next/image';
import mk1 from '../Images/test1.webp';
import malt from '../Images/test2.webp';
import soap from '../Images/test3.webp';
import l1 from '../Images/l1.png';
import l2 from '../Images/l2.jpeg';
import l3 from '../Images/l3.jpeg';
import l4 from '../Images/l4.jpeg';
// ... other imports

const MockupsPreview = () => {
  return (
    <div className="holding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div>
              <div className="gracias ">
                <Image src={mk1} className="Imaggg " alt="category images" />
                <div className="overlay ">
                  <div className="csb">Counter Sign Board</div>
                  <div className="Psd">PSD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <div className="gracias2">
              <div className="row " style={{ height: '100%' }}>
                <div className="col-12 col-lg-12 mb-4 neglience">
                  <div className="forover2">
                    <Image
                      src={soap}
                      className="Imaggg2"
                      alt="category images"
                    />
                    <div className="overlay2">
                      <div className="csb">Counter Sign Board</div>
                      <div className="Psd">PSD</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 neglience">
                  <div className="forover2">
                    <Image
                      src={malt}
                      className="Imaggg2"
                      alt="category images"
                    />
                    <div className="overlay2">
                      <div className="csb">Counter Sign Board</div>
                      <div className="Psd">PSD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l1} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l2} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l3} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l4} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l1} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l2} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="ufufu">
              <Image src={l3} className="others" />
              <div className="overlay2">
                <div className="csb">Counter Sign Board</div>
                <div className="Psd">PSD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupsPreview;
