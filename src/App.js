import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Link } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';
import List from './pages/List';
import store from './store';

const history = createHistory();

export default () => (
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={() => (<List>Home <Link to="/about">About</Link></List>)} />
                <Route path="/about" component={() => (<BasicLayout>About <Link to="/">Home</Link></BasicLayout>)} />
            </div>
        </ConnectedRouter>
    </Provider>
)