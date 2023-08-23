'use client';
import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, className, type }) => {
  const ButtonComponent =
    {
      curvedButtons: curvedButtons,
      viewMore: viewMore,
      CTAButton: CTAButton,
      largeButton: largeButton,
      mediumButton: mediumButton,
      smallButton: smallButton,
      smallButtonTransparent: smallButtonTransparent,
      xsButton: xsButton,
      searchButton: searchButton,
      subscriptionCTAButton: subscriptionCTAButton,
      successful: successful,
      failed: failed,
    }[type] || StyledButton;

  return (
    <ButtonComponent className={className} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
const StyledButton = styled.button`
  /* Add your base button styles here */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
`;
const successful = styled(StyledButton)`
  border-radius: 54px;
  background: #7acd53;
  display: flex;
  padding: 6px 17px;
  justify-content: center;
  align-items: center;
  color: black;
  color: var(--primary-bg-colour, #090909);
  font-family: Darker Grotesque;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const failed = styled(StyledButton)`
  border-radius: 54px;
  background: #ff7562;
  display: flex;
  padding: 6px 17px;
  justify-content: center;
  align-items: center;
  color: black;
  color: var(--primary-bg-colour, #090909);
  font-family: Darker Grotesque;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const curvedButtons = styled(StyledButton)`
  display: flex;
  width: 171px;
  height: 71px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  border: 1px solid var(--grey-text, #6340ef);
  background: transparent;
  color: var(--white, #fff);
  font-family: Darker Grotesque;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  transition: background-color 0.2s ease;
  &:hover {
    background: var(--primary-colour, #6340ef);
    color: var(--white, #fff);
    border: 0px solid var(--grey-text, #767676);
  }
`;
const viewMore = styled(StyledButton)`
  width: 168px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 63px;
  background: var(--white, #ffffff);
  color: var(--primary-bg-colour, #090909);
  font-family: Darker Grotesque;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CTAButton = styled(StyledButton)`
  display: flex;
  width: 287px;
  height: 51px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #6340ef;
  color: #fff;
  font-family: Darker Grotesque;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const largeButton = styled(StyledButton)`
  display: flex;
  width: 80%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #6340ef;
  color: var(--white, #fff);
  text-align: center;
  font-family: Darker Grotesque;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
const mediumButton = styled(StyledButton)`
  display: flex;
  padding: 15px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--primary-colour, #6340ef);
  color: var(--white, #fff);
  text-align: center;
  font-family: Darker Grotesque;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;
const smallButton = styled(StyledButton)`
  display: flex;
  padding: 13px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--primary-colour, #6340ef);
  color: var(--white, #fff);
  text-align: center;
  font-family: Darker Grotesque;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  /* margin-right: 2px; */
`;
const smallButtonTransparent = styled(StyledButton)`
  display: flex;
  padding: 13px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: transparent;
  color: var(--white, #fff);
  text-align: center;
  font-family: Darker Grotesque;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  border: 1px solid #6340ef;
`;
const xsButton = styled(StyledButton)`
  display: flex;
  /* padding: 14px 24px; */
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--primary-colour, #6340ef);
  color: var(--white, #fff);
  font-family: Darker Grotesque;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const searchButton = styled(StyledButton)`
  display: flex;
  padding: 12px 28px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  background: var(--primary-colour, #6340ef);
  color: var(--white, #fff);
  font-family: Darker Grotesque;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;
const subscriptionCTAButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 69px;
  background: var(--primary-bg-colour, #090909);
  color: var(--white, #fff);
  font-family: Darker Grotesque;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
`;
