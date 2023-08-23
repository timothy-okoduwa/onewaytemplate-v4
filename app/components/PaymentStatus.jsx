import React from 'react';
import { styled } from 'styled-components';
const PaymentStatus = ({ children, className, type }) => {
  const Status =
    {
      failed: failed,
    }[type] || Sucessful;
  return <Status className={className}>{children}</Status>;
};

export default PaymentStatus;
const Sucessful = styled.div`
  display: flex;
  width: 100px;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 54px;
  background: rgba(2, 198, 80, 0.22);
  color: rgba(2, 198, 80, 1);
`;
const failed = styled(Sucessful)`
  display: inline-flex;
  width: 70px;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 54px;
  background: rgba(255, 102, 81, 0.41);
  color: hsla(7, 100%, 66%, 1);
`;
