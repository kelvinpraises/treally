import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../components/ChatScreen";
import ChatSurface from "../components/ChatSurface";
import Text from "../components/Text";

const SContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const STextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SFlex = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SContainer>
        <SFlex>
          <ChatScreen />
        </SFlex>
        <ChatSurface />
      </SContainer>
    </div>
  );
};

export default Home;