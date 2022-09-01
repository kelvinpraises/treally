import styled from "styled-components";
import StartChatButton from "./StartChatButton";
import NavItem from "./NavItem";
import InitContext from "../context/init";
import { useContext } from "react";
import AddContactButton from "./AddContactButton";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../services/contacts-db";

const SNavigation = styled.div`
  min-width: 300px;
  max-height: 100vh;
  border-right: ${({ theme }) => `2px solid ${theme.nav}`};
`;

const SMascot = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100px;
  border-bottom: ${({ theme }) => `2px solid ${theme.nav}`};
`;

const SNavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
  overflow: scroll;
`;

const Navigation: React.FC = () => {
  const { privateKey } = useContext(InitContext);

  const contacts = useLiveQuery(async () => await db.contacts.toArray());

  return (
    <SNavigation>
      <SMascot>
        {privateKey ? <AddContactButton /> : <StartChatButton />}
      </SMascot>
      <SNavItems>
        {contacts?.map((contact) => (
          <NavItem contact={{ universalProfile: contact.universalProfile }} />
        ))}
      </SNavItems>
    </SNavigation>
  );
};

export default Navigation;
