import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export default function RequireAuth(props: Props) {
  const { children } = props;
  const { isLoggedIn } = useTracker(
    () => ({
      isLoggedIn: !!Meteor.userId(),
    }),
    [],
  );
  return isLoggedIn ? children : <Navigate to={'/presentation'} />;
}
