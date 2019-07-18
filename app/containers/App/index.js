/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Authentication from 'utils/auth/Authentication';

import { routes } from 'config/routes';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AuthPages from 'containers/AuthPages/Loadable';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Route exact path={routes.login} component={AuthPages} />
      <Authentication>
        <Switch>
          <Route exact path={routes.index} component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Authentication>
    </div>
  );
}
