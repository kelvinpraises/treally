import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Scaffold from "../components/Scaffold";
import ChatAccountContext from "../context/chat-account";
import InitContext from "../context/init";
import ModalContext from "../context/modal";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  // Set Password.
  const [locked, setLocked] = useState(true);
  const [privateKey, setPrivateKey] = useState();
  const [publicKey, setPublicKey] = useState();

  // Check for mek keys.
  const [mEKLoading, setMEKLoading] = useState(true);
  const [mEKDetails, setMEKDetails] = useState<string[]>();

  // Loads all contacts on db.
  const [contacts, setContacts] = useState<IContact[]>();

  useEffect(() => {
    // retrieves data from the db.
    (async () => {})();
  }, []);

  useEffect(() => {
    // saves any changes to db.
    (async () => {})();
  }, [contacts]);

  // Modal
  const [authModal, setAuthModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  return (
    <InitContext.Provider
      value={{
        mEKDetails,
        setMEKDetails,
        mEKLoading,
        setMEKLoading,
        locked,
        setLocked,
        privateKey,
        setPrivateKey,
        publicKey,
        setPublicKey,
      }}
    >
      <ModalContext.Provider
        value={{ authModal, setAuthModal, contactModal, setContactModal }}
      >
        <ChatAccountContext.Provider value={{}}>
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Scaffold>
              <Component {...pageProps} />
            </Scaffold>
          </ThemeProvider>
        </ChatAccountContext.Provider>
      </ModalContext.Provider>
    </InitContext.Provider>
  );
}

export default MyApp;
