import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Main } from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Dosis', 'Roboto', sans-serif;
    color: white;
  }
`;

const theme = {
  main: "#123f68",
  secondary: "#12cdb7",
};

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
