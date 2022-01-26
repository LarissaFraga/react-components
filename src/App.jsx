import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './themeConfig';
import Content from './components/Content';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
