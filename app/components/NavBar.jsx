'use client';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import l from '../Images/logo-white.svg';
import Button from './Button';
import a from '../Images/avata.svg';
import './Components.css';
import Link from 'next/link';
import { MdLogout } from 'react-icons/md';
import Popover from '@mui/material/Popover';
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div className="whip">
        <Navbar expand="lg" className="fixed-top mainHeader pt-4 pb-4">
          <Container>
            <Navbar.Brand className="push">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <div className="ddkd">
                  <Image src={l} alt="logo" className="timedc" />
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-light"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" nav">
                <div style={{ textDecoration: 'none' }}>
                  <Link href="/categories" style={{ textDecoration: 'none' }}>
                    <div className="pushs">Categories</div>
                  </Link>
                </div>
                <div to="/blog" style={{ textDecoration: 'none' }}>
                  <div className="pushs">Blog</div>
                </div>
                {/* <div>
                  <div
                    aria-describedby={id}
                    onClick={handleClick}
                    className="d-flex justify-content-center align-items-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="roundedd">
                      <Image src={a} alt="avatar" className="roundedd" />
                    </div>

                    <div className="pushs">Hi, Jola</div>
                  </div>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <div className="logOuttings">
                      <div className="d-flex just-content-center align-items-end">
                        <div>
                          <MdLogout />
                        </div>{' '}
                        <div className="px-3">Log out</div>
                      </div>
                    </div>
                  </Popover>
                </div> */}

                <div className="MarginForButton">
                  <Link href="/signin" style={{ textDecoration: 'none' }}>
                    <Button type="smallButtonTransparent">Sign in</Button>
                  </Link>
                </div>
                <div className="MarginForButton">
                  <Link href="/signup" style={{ textDecoration: 'none' }}>
                    <Button type="smallButton">Sign Up</Button>
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
