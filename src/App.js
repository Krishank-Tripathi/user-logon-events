import React from 'react';
import './App.css';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import configureStore from "./appRedux/store";
import { Provider } from 'react-redux';
import { CommonRoute } from './components/common/layout';
import Home from './containers/home_container';
import User from './containers/user_container';

//import './assets/styles/style.scss';

export const stores = configureStore();


function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename="/user-detail">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <CommonRoute path="/home" component={Home} />
          <CommonRoute path="/user/:id/:name/:timezone/:activityList" component={User} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
//<CommonRoute path="/user/:userId" component={} />
export default App;
