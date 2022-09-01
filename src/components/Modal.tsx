import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import InitContext from "../context/init";
import ModalContext from "../context/modal";
import { checkPasswordMatch, getPublicKey } from "../services/encrypt";
import { getMek, setMEK } from "../services/mEKs";
import Text from "./Text";

const SModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  z-index: 2000;
`;

const SModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
  background: linear-gradient(180deg, #3e404b 0%, #232429 100%);
  border-radius: 1rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  position: relative;
  padding: 2rem;
`;

const STitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
`;

const SFlex = styled.div`
  flex: 1;
`;

const SHeader = styled(Text)`
  font-weight: 600;
  user-select: none;
`;

const Simg = styled.img`
  width: 1rem;
  height: 1rem;
`;

const SText = styled(Text)`
  font-weight: 300;
`;

const SInput = styled.input`
  margin-top: 1rem;
  border: 2px solid #606373;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 6px;
  border-radius: 4px;
  color: white;
  outline: none;
  background-color: transparent;
`;

const SButton = styled.div`
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
  width: 100%;

  :hover {
    background-color: #a1b5fd;
    transition: all 500ms;
  }
`;

const Modal: React.FC = () => {
  const {
    mEKDetails,
    mEKLoading,
    setMEKLoading,
    setLocked,
    setPrivateKey,
    setPublicKey,
  } = useContext(InitContext);
  const { authModal, setAuthModal } = useContext(ModalContext);

  const [passPhrase, setPassPhrase] = useState("");

  const createMEK = useCallback(async () => {
    const result = getPublicKey(passPhrase);
    if (result) {
      setMEKLoading(true);
      setMEK([result as unknown as string]);
      setMEKLoading(false);
      setAuthModal(false);
    }
  }, [passPhrase]);

  const checkMEK = useCallback(async () => {
    const mek = await getMek();
    const result = mek && checkPasswordMatch(passPhrase, mek.value as string[]);
    if (result && result.passwordMatch) {
      setMEKLoading(true);
      setLocked(false);
      setPrivateKey(result.rsaKey);
      setPublicKey(result.rsaPublicKey);
      setMEKLoading(false);
      setAuthModal(false);
    } else {
      //error
    }
  }, [passPhrase]);

  if (!authModal) {
    return null;
  }

  return (
    <SModal onClick={() => setAuthModal(false)}>
      {mEKLoading ? (
        <SModalContent onClick={(e) => e.stopPropagation()}>
          <SFlex style={{ display: "grid", placeItems: "center" }}>
            <img width={50} src="spinner.gif" alt="loading..." />
          </SFlex>
        </SModalContent>
      ) : mEKDetails.length > 0 ? (
        <SModalContent onClick={(e) => e.stopPropagation()}>
          <STitle>
            <SHeader type="h4">Welcome</SHeader>
            <Simg onClick={() => setAuthModal(false)} src="/close.svg" alt="" />
          </STitle>
          <SFlex>
            <SText type="h5">Input a unique pass phrase</SText>
            <SText>Keep safe! it encrypts messages.</SText>
            <SInput
              type="passPhrase"
              value={passPhrase}
              onChange={(e) => setPassPhrase(e.target.value)}
              placeholder="Pass Phrase"
            />
          </SFlex>
          <SButton
            onClick={() => {
              checkMEK();
            }}
          >
            <Text type="h6">Lets go</Text>
          </SButton>
        </SModalContent>
      ) : (
        <SModalContent onClick={(e) => e.stopPropagation()}>
          <STitle>
            <SHeader type="h4">Welcome</SHeader>
            <Simg onClick={() => setAuthModal(false)} src="/close.svg" alt="" />
          </STitle>
          <SFlex>
            <SText type="h5">Create a unique pass phrase</SText>
            <SText>This adds a message key to your UP.</SText>
            <SText>Store pass phrase! it encrypts messages.</SText>
            <SInput
              type="passPhrase"
              value={passPhrase}
              onChange={(e) => setPassPhrase(e.target.value)}
              placeholder="Pass Phrase"
            />
          </SFlex>
          <SButton
            onClick={() => {
              createMEK();
            }}
          >
            <Text type="h6">Create</Text>
          </SButton>
        </SModalContent>
      )}
    </SModal>
  );
};

export default Modal;
