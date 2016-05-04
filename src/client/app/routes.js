import React from 'react';
import {Route} from 'react-router';
import Grid from './Grid';

export default (
  <Route component={Grid}>
    <Route path='/' component={Grid} />
  </Route>
);
