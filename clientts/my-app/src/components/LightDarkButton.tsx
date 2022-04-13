import React from 'react'
import { ThemeIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';

const LightDarkButton = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    
  return (
    <ThemeIcon 
    radius="md" 
    size="lg" 
    sx={(theme) => ({
        backgroundColor: theme.colors.dark[4],
        '&:hover': {
          backgroundColor: theme.colors.dark[3],
        },
      })}
    onClick={() => toggleColorScheme()}
    >
      {dark ? <Sun size={22} /> : <Moon size={18} />}
    </ThemeIcon>
  )
}

export default LightDarkButton 