import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../login';

export default function LoggedOutRouter() {

  return (
    <Routes>
      <Route>
        <Route path={`*`} element={<Login />} />
      </Route>
    </Routes>
  );
}
