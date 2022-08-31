import { useState } from "react";
import styled from "styled-components";

const SInput = styled.input`
  border: 2px solid transparent;
  width: 80%;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 6px;
  border-radius: 4px;
  color: white;
  outline: none;
  background-color: transparent;
`;

const SImg = styled.img`
  mix-blend-mode: overlay;
  margin-top: 3px;
  margin-right: 3rem;
  width: 30px;
  
  :hover {
    mix-blend-mode: normal;
  }
`;

const SChatSurface = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(180deg, #3e404b 0%, #232429 100%);
  width: 100%;
  height: 60px;

  /* background: linear-gradient(180deg, #3E404B -67.56%, #232429 149.89%); */
  background: linear-gradient(180deg, #3e404b -80%, #232429 100%);
  border-radius: 20px;
`;

// clear input on new id

const ChatSurface = () => {
  const [message, setMessage] = useState("");
  return (
    <SChatSurface>
      <SInput
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />

      <SImg
        src="send.svg"
        alt=""
        onClick={() => {
          alert("jappyse" + message);
        }}
      />
    </SChatSurface>
  );
};

export default ChatSurface;
