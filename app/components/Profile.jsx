import React from 'react';
import Image from 'next/image';
import ava from '../Images/avatar.png';
import Inputs from './Inputs';
const Profile = () => {
  return (
    <div>
      <div className="alpha mb-5">
        <div>
          <div className="ImageAndText">
            <div className="ProfileImage">
              <Image src={ava} className="ProfileImage" />
            </div>
            <div>
              <div className="jola">Jola Sony</div>
              <div className="topRated"> ⭐ Top Rated </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4">
                <div>
                  <div className="labels">Name</div>
                  <div>
                    <Inputs Type="blackInputs" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div>
                  <div className="labels">Email</div>
                  <div>
                    <Inputs Type="blackInputs" />
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

export default Profile;
