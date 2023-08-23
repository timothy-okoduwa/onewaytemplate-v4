import React from 'react';
import Image from 'next/image';
import a from '../Images/logo-white.svg';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import Inputs from './Inputs';
import Button from './Button';

const Signin = () => {
  return (
    <div className="centttt">
      <div className="jgure">
        <div className="downPlas">
          <div className="holdersOfAll">
            <div>
              <div className="Lofog">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Image src={a} alt="logo" />
                </Link>

                <div className="createAnAccount">Sign in</div>

                <div className="signWithGoogle px-4">
                  <div className="Gicon">
                    <FcGoogle />
                  </div>
                  <div className="Gtext">Sign in with Google</div>
                </div>
                <div className="dflex ">
                  <div className="linee"></div>
                  <span className="OR">OR</span> <div className="linee"></div>
                </div>

                <div className="purpddd">
                  <div className="mb-4">
                    <div className="labels">Email</div>
                    <div>
                      <Inputs Type="normalInput" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="labels">Password</div>
                    <div>
                      <Inputs Type="normalInput" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="Already">
                      Don't have an account?{' '}
                      <Link href="/signup" style={{ textDecoration: 'none' }}>
                        <span>Sign up </span>
                      </Link>
                    </div>
                  </div>
                  <div className="mb-5 w-100">
                    <Link
                      href="/userdashboard"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button type="xsButton">Sign in</Button>
                    </Link>
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

export default Signin;
