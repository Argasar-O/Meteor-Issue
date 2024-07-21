import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import Presentation from "../../loggedOut/Presentation";

export default function LoggedInRouter() {

 useTracker(() => {
   Meteor.subscribe('publishInError');
  }, []);

  return (
      <Routes>
        <Route element={<></>}>
            <Route path={`*`} element={<Presentation />} />
        </Route>
      </Routes>
  );
}
