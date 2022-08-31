import React from "react";
import styled from "styled-components";
import Text from "./Text";

interface IButtonProps {
  children: React.ReactNode;
  func: React.MouseEventHandler;
}

const SButton = styled.div`
  /* height: 3em;
  padding: 0 2.5rem;
  border: 2px solid #21273f;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  user-select: none;
  cursor: pointer; */

  display: flex;
  background-color: #9fcdfd;
  padding: 0.75em 1.4em;
  color: ${({ theme }) => theme.text3};
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  user-select: none;
  width: 80%;

  :hover {
    background-color: #A1B5FD;
    transition: all 500ms;
  }
`;

const Button: React.FC<IButtonProps> = ({ children, func }) => {
  return (
    <SButton onClick={func}>
      <Text type="h6">{children}</Text>
    </SButton>
  );
};

export default Button;
