import React from 'react';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
import { render }  from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './app/routes';
const history = createBrowserHistory();
render(
  <Router children={routes} history={history} />,
  document.getElementById('app')
);
