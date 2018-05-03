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
import Create from './pages/Create';
import Detail from './pages/Detail';
import Update from './pages/Update';
import store from './store';

const history = createHistory();

export default () => (
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <Switch>
                <BasicLayout>
                    <Route exact path="/" component={() => (<List />)} />
                    <Route path="/create" component={() => (<Create />)} />
                    <Route path="/detail/:id" component={() => (<Detail />)} />
                    <Route path="/update/:id" component={() => (<Update />)} />
                    <Route path="/about" component={() => (<About />)} />
                </BasicLayout>
            </Switch>
        </ConnectedRouter>
    </Provider>
)