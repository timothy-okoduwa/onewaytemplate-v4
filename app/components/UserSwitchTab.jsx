import React from 'react';
import Profile from './Profile';
import Premium from './Premium';
import Free from './Free';
import Payment from './Payment';

const UserSwitchTab = ({ step, setStep }) => {
  const renderEditScreans = () => {
    switch (step) {
      case 1:
        return <Profile step={step} setStep={setStep} />;
      case 2:
        return <Premium step={step} setStep={setStep} />;
      case 3:
        return <Free step={step} setStep={setStep} />;
      case 4:
        return <Payment step={step} setStep={setStep} />;

      default:
        return null;
    }
  };
  return <div>{renderEditScreans()}</div>;
};

export default UserSwitchTab;
