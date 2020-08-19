import React from 'react';
import Home from './Pages/Home';

import HubProvider from './context/Hub'

import { GlobalStyle } from './global-style';

function App() {
  return (
    <HubProvider>
      <GlobalStyle />
      <Home />
    </HubProvider>
  );
}

export default App;
