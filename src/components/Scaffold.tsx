import React, { useState } from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

interface IScaffoldProp {
  children: React.ReactNode;
}

const SScaffold = styled.div`
  display: flex;
`;

const SContainer = styled.div`
  width: 100%;
`;

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <SScaffold>
      <Navigation />
      <SContainer>{children}</SContainer>
    </SScaffold>
  );
};

export default Scaffold;
