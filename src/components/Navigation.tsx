import { MouseEvent } from "react";
import styled from "styled-components";
import Button from "./Button";
import NavItem from "./NavItem";

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

export default function Navigation() {
  return (
    <SNavigation>
      <SMascot>
        <Button
          children={"Start Chat"}
          func={() => {
            console.log("happy");
          }}
        />
      </SMascot>
      <SNavItems>
        <NavItem
          contact={{
            imgUrl:
              "data:image/jpeg;base64,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",
            name: "happyssssssssssssss",
            universalProfile: "0x000022223939838393jfhfhrn3nriufe",
          }}
        />

        <NavItem
          contact={{
            name: "happy",
            universalProfile: "0x000022223939838393jfhfhrn3nriuf",
          }}
        />

        <NavItem
          contact={{
            name: "happy",
            universalProfile: "0x000022223939838393jfhfhrn3nriuf",
          }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />

        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
        <NavItem
          contact={{ universalProfile: "0x000022223939838393jfhfhrn3nriuf" }}
        />
      </SNavItems>
    </SNavigation>
  );
}
