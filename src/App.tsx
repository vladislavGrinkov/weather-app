import React, { FC, ReactElement } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { store } from './init/store';
import { Weathers } from './bus/weather/index';
import { LoginView } from './views/LoginView';
import { login } from './views/LoginView/login';
import { AuthComponent } from './bus/auth/index';
import history from './services/history';

export const App: FC = (): ReactElement => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={login} component={LoginView} />
        <Route>
          <AuthComponent>
            <Route path="/weathers">
              <Redirect from="/login" to="/weathers" />
              <Weathers />
            </Route>
          </AuthComponent>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);
