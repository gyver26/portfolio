import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Main } from "./components";
import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOtZDp2GXZOhHnaerIcWnh7Uv6d-VRGPo",
  authDomain: "gyver-gabito.firebaseapp.com",
  projectId: "gyver-gabito",
  storageBucket: "gyver-gabito.appspot.com",
  messagingSenderId: "886837274330",
  appId: "1:886837274330:web:32d5ccb12e2f4eb5d5e7e3",
  measurementId: "G-K4NTPCBSEJ",
};

const app = firebase.initializeApp(firebaseConfig);

firebase.analytics(app);

type ThemeType = typeof theme;

type GlobalThemeProps = {
  theme: ThemeType;
};

const GlobalStyleBody = createGlobalStyle<GlobalThemeProps>`
  body {
    margin: 0;
    font-family: 'Dosis', 'Roboto', sans-serif;
    color: white;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${(props) => props.theme.spacing(1)};
    margin-bottom: ${(props) => props.theme.spacing(1)};
  }
`;

const theme = {
  main: "#123f68",
  secondary: "#12cdb7",
  spacing: (spacing: number) => {
    const spacings = ["8px", "16px", "24px", "32px", "40px", "48px"];
    return spacings[spacing - 1];
  },
};

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyleBody />
        <Main />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
