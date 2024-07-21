import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export function Layout() {
  return (
    <Box width="100%" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
      <Box width="100%" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
        <Header />
        <Box width="100%" padding={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
