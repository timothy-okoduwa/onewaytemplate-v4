'use client';
import React, { useState, useEffect, useRef } from 'react';
import Inputs from './Inputs';
import gsap from 'gsap';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
const Header = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
    const newScrollX = scrollX + shift;

    gsap.to(scrl.current, {
      scrollLeft: newScrollX,
      duration: 0.5, // Adjust the duration as needed
      onComplete: () => {
        setscrollX(newScrollX);
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
      },
    });
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.2 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.2 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <div>
      <div className="headerBackground">
        <div className="container-fluid">
          <div className="HeaderDiv">
            <div className="init">
              Download <br /> Templates here
            </div>
          </div>
          <div>
            <div className="mt-5">
              <span className="catee">Category</span>
              <div className="putyty">
                <div className="man">
                  {scrollX !== 0 && (
                    <div className="gogo">
                      <div
                        className="next"
                        onClick={() => slide(-300)}
                        onMouseEnter={(e) => anim(e)}
                        // onMouseLeave={(e) => anim2(e)}
                        onMouseLeave={(e) => anim2(e)}
                      >
                        <MdArrowBackIosNew />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-winn" ref={scrl} onScroll={scrollCheck}>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                  <div className="odafe">All</div>
                </div>
                <div className="man">
                  {!scrolEnd && (
                    <div className="gogo2">
                      <div
                        className="next2"
                        onClick={() => slide(+300)}
                        onMouseEnter={(e) => anim(e)}
                        onMouseLeave={(e) => anim2(e)}
                      >
                        <MdArrowForwardIos />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="HeaderDiv">
            <div className="forTransparentSearch">
              <div className="w-100">
                <Inputs
                  type="text"
                  Type="upSearchButton"
                  placeholder="Search for template"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
