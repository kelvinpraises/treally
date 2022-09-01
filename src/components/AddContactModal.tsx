import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import ModalContext from "../context/modal";
import { db } from "../services/contacts-db";
import Text from "./Text";

const SAddContactModal = styled.div`
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

const AddContactModal: React.FC = () => {
  const { contactModal, setContactModal } = useContext(ModalContext);

  const [contactUP, setContactUP] = useState("");

  const saveContactToDb = useCallback(async () => {
    await db.contacts.add({
      universalProfile: contactUP,
    });
    setContactUP("");
    setContactModal(false);
  }, [contactUP]);

  if (!contactModal) {
    return null;
  }

  return (
    <SAddContactModal onClick={() => setContactModal(false)}>
      {false ? (
        <SModalContent onClick={(e) => e.stopPropagation()}>
          <SFlex style={{ display: "grid", placeItems: "center" }}>
            <img width={50} src="spinner.gif" alt="loading..." />
          </SFlex>
        </SModalContent>
      ) : (
        <SModalContent onClick={(e) => e.stopPropagation()}>
          <STitle>
            <SHeader type="h4">Contact</SHeader>
            <Simg
              onClick={() => setContactModal(false)}
              src="/close.svg"
              alt=""
            />
          </STitle>
          <SFlex>
            <SText type="h5">Start new chat</SText>
            <SText>add the UP of your contact.</SText>
            <SInput
              type="string"
              value={contactUP}
              onChange={(e) => setContactUP(e.target.value)}
              placeholder="Contact UP"
            />
          </SFlex>
          <SButton onClick={() => saveContactToDb()}>
            <Text type="h6">Add Contact</Text>
          </SButton>
        </SModalContent>
      )}
    </SAddContactModal>
  );
};

export default AddContactModal;
