'use client';
import React, { useState } from 'react';
import UserSwitchTab from './UserSwitchTab';

const UserDashboard = () => {
  const [step, setStep] = useState(1);
  const [previousStep, setPreviousStep] = useState(0);
  const handleStepChange = (newStep) => {
    setPreviousStep(step);
    setStep(newStep);
  };

  const navigateToStep = (newStep) => {
    if (newStep !== step) {
      handleStepChange(newStep);
    }
  };
  return (
    <div className="passer">
      <div className="allholder">
        <div className="forAll">
          <div className="subNavs">
            <div
              className={`navvs ${step === 1 ? 'withBorder' : ''}`}
              onClick={() => navigateToStep(1)}
            >
              Profile
            </div>
            <div
              className={`navvs ${step === 2 ? 'withBorder' : ''} ${
                previousStep >= 2 ? 'navvs' : ''
              }`}
              onClick={() => navigateToStep(2)}
            >
              Premium Downloads
            </div>
            <div
              className={`navvs ${step === 3 ? 'withBorder' : ''} ${
                previousStep >= 3 ? 'navvs' : ''
              }`}
              onClick={() => navigateToStep(3)}
            >
              Free Downloads
            </div>
            <div
              className={`navvs ${step === 4 ? 'withBorder' : ''} ${
                previousStep >= 4 ? 'navvs' : ''
              }`}
              onClick={() => navigateToStep(4)}
            >
              Payment History
            </div>
          </div>

          <div className="whujdk">
            <UserSwitchTab step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
