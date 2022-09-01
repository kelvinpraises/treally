import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import InitContext from "../context/init";
import ModalContext from "../context/modal";
import { getMek } from "../services/mEKs";
import Text from "./Text";

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
    background-color: #a1b5fd;
    transition: all 500ms;
  }
`;

const StartChatButton: React.FC = () => {
  const { setMEKLoading, setMEKDetails } = useContext(InitContext);
  const { setAuthModal } = useContext(ModalContext);

  const init = useCallback(async () => {
    setAuthModal(true);
    const result = await getMek();
    if (result) {
      console.log(result.value);
      setMEKDetails([...(result.value as string[])]);
      setMEKLoading(false);
    } else {
      console.log("No MEK in contract");
      setMEKDetails([]);
      setMEKLoading(false);
    }
  }, []);

  return (
    <SButton onClick={async () => await init()}>
      <Text type="h6">Start Chat</Text>
    </SButton>
  );
};

export default StartChatButton;
