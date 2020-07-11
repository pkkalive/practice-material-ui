import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import theme from './ui/Theme';
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello World
    </ThemeProvider>
  );
}

export default App;
