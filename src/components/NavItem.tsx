import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import Text from "./Text";
import ellipsisAddress from "../utils/ellipsisAddress.js";

interface props {
  contact: IContact;
}

const SLink = styled.a`
  text-decoration: none;
`;

const SFlex = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const SNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  position: relative;
  border-bottom: ${({ theme }) => `2px solid ${theme.nav}`};
  :hover {
    background-color: #12141e;
  }
`;

const NavItem: FC<props> = ({ contact }) => {
  const { name, universalProfile, imgUrl } = contact;

  return (
    <SNavItem>
      <Avatar imgUrl={imgUrl && imgUrl} height={"70px"} width={"70px"} />

      <SFlex>
        <Text>{name ? name : ellipsisAddress(universalProfile)}</Text>
      </SFlex>

      <Link as={universalProfile} href={universalProfile}>
        <a
          style={{
            position: "absolute",
            inset: 0,
            height: "inherit",
          }}
        ></a>
      </Link>
    </SNavItem>
  );
};

export default NavItem;
