import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LinearProgress from '@mui/material/LinearProgress';
import {  StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import LoggedInRouter from './loggedIn/router/LoggedInRouter';
import { useTracker } from 'meteor/react-meteor-data';
import LoggedOutRouter from './loggedOut/router/LoggedOutRouter';

export function Router() {
  const { isLoggedIn } = useTracker(
    () => ({
      isLoggedIn: !!Meteor.userId(),
    }),
    [],
  );

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
            <CssBaseline />
              <Suspense fallback={<LinearProgress />}>{isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Suspense>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}
