import React, { Component } from 'react';
import './App.css';

import { Provider, connect } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Link } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';
import List from './pages/List';
import About from './pages/About';
import store from './store';
console.log(store.getState())
const history = createHistory();

export default () => (
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <Switch>
                <BasicLayout>
                    <Route exact path="/" component={() => (<List />)} />
                    <Route path="/about" component={() => (<About />)} />
                    {/*<Route component={()=>(<Redirect to='/' />)} />*/}
                </BasicLayout>
            </Switch>
        </ConnectedRouter>
    </Provider>
)