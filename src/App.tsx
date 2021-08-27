import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Main } from "./components";

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
