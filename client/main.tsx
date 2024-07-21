import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router } from '../imports/ui/Router';
import { createRoot } from 'react-dom/client';

Meteor.startup(async () => {
  // TODO Uncomment
  //await Meteor.callAsync('useless');
  const App = <Router />;
  const root = createRoot(document.getElementById('root')!);
  root.render(App);
});
