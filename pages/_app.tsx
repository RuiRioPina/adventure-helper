import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AccountTab from '../components/AccountTab';
import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState('guest');

  const handleLogout = () => {
    setCurrentUser('guest');
  };

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} currentUser={currentUser} />
      {currentUser !== 'guest' && (
        <AccountTab username={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
}
