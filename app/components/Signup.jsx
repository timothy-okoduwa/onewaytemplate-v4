import React from 'react';
import Image from 'next/image';
import a from '../Images/logo-white.svg';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import Inputs from './Inputs';
import Button from './Button';
const Signup = () => {
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

                <div className="createAnAccount">Create an account</div>

                <div className="signWithGoogle px-4">
                  <div className="Gicon">
                    <FcGoogle />
                  </div>
                  <div className="Gtext">Sign up with Google</div>
                </div>
                <div className="dflex ">
                  <div className="linee"></div>
                  <span className="OR">OR</span> <div className="linee"></div>
                </div>

                <div className="purpddd">
                  <div className="mb-4">
                    <div className="labels">Fullname</div>
                    <div>
                      <Inputs Type="normalInput" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="labels">Email</div>
                    <div>
                      <Inputs Type="normalInput" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="labels">Create Password</div>
                    <div>
                      <Inputs Type="normalInput" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="Already">
                      Already have an account?{' '}
                      <Link href="/signin" style={{ textDecoration: 'none' }}>
                        <span>Sign in </span>
                      </Link>
                    </div>
                    <div className="buSigning">
                      By signing up or creating an account, you agree to our
                      Privacy Policy and Terms of Service.
                    </div>
                  </div>
                  <div className="mb-5 w-100">
                    <Link
                      href="/userdashboard"
                      style={{ textDecoration: 'none' }}
                    >
                      <Button type="xsButton">Sign Up</Button>
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

export default Signup;
