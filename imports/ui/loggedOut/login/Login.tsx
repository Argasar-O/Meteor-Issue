import React from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTracker } from 'meteor/react-meteor-data';

export function Login() {

  const { isLoggedIn } = useTracker(
    () => ({
      isLoggedIn: !!Meteor.userId(),
    }),
    [],
  );

  return (
    <>
      {!isLoggedIn ? (
        <Button
          onClick={() => {
            Meteor.loginWithGoogle({}, (err) => {
              if (!err) {
                console.log(`You're connected`, { variant: 'success' });
              } else {
                console.log(`${err.name}\n${err.message}`, { variant: 'error' });
              }
            });
          }}
        >
          Log in with google
        </Button>
      ) : (
        <Navigate to={''} />
      )}
    </>
  );
}
