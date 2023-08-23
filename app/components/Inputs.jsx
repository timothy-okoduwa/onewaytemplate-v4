'use client';
import React from 'react';
import { styled } from 'styled-components';
const Inputs = ({ children, className, Type, placeholder, type }) => {
  const InputComponent =
    {
      upSearchButton: upSearchButton,
      blackInputs: blackInputs,
      transparentEmailInput: transparentEmailInput,
      invincibleInput: invincibleInput,
    }[Type] || normalInput;
  const emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
  return (
    <InputComponent
      className={className}
      placeholder={placeholder}
      type={type === 'email' ? 'email' : 'text'}
      pattern={type === 'email' ? emailPattern : null}
    >
      {children}
    </InputComponent>
  );
};

export default Inputs;
const normalInput = styled.input`
  width: 100%;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #fff;
  padding-left: 8px;
  padding-right: 8px;
  ::placeholder {
    color: #ffffff !important;
    text-align: center;
    font-family: Darker Grotesque;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const upSearchButton = styled(normalInput)`
  background-color: transparent;
  width: 100%;
  height: 80px;
  border-radius: 81px;
  border: 1px solid #6240ef;
  padding-left: 80px;
  padding-right: 8px;
  color: white;
  ::placeholder {
    color: #ffffff !important;
    text-align: center;
    font-family: Darker Grotesque;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const blackInputs = styled(normalInput)`
  border-radius: 5px;
  background: #191919;
  color: white;
`;
const transparentEmailInput = styled(normalInput)`
  background-color: green;
`;
const invincibleInput = styled(normalInput)`
  width: 100%;
  background-color: transparent;
  padding-left: 30px;
  outline: none;
  border: none;
  color: black !important;
  ::placeholder {
    color: #767676;
    text-align: center;
    font-family: Darker Grotesque;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
