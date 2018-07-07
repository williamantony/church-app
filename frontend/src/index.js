import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducers from './redux/reducers';

import './index.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Error404 from './pages/Error404/Error404';
import Modal from './components/Modal/Modal';
import Notification from './components/Notification/Notification';

const ReduxStore = createStore(Reducers, applyMiddleware(ReduxPromise, ReduxThunk));

ReactDOM.render(
  <Provider store={ReduxStore}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/register/:token?" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route component={Error404} />
        </Switch>
        <Modal />
        <Notification />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
