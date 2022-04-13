import React, { useState } from 'react';
import './App.css';
import { Paper } from '@mantine/core';
import { HeaderMiddle } from './components/Navbar';
import { linksItems } from './components/mockdata';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { FooterSocial } from './components/Footer';


function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]); 

  return (
      <div className='App'>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{colorScheme}}>
            <Paper radius={0} style={{minHeight: "100vh"}}>
              <HeaderMiddle links={linksItems} />
              <FooterSocial />
            </Paper>
          </MantineProvider>
        </ColorSchemeProvider>
      </div>  
  );
}

export default App;
 