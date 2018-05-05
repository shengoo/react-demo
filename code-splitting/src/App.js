import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const LoadableOtherComponent = Loadable({
    loader: () => import('./Hello'),
    loading: () => <div>Loading...</div>,
});

const Hello = () => (
    <LoadableOtherComponent/>
);

const Home = Loadable({
    loader: () => import('./routes/Home'),
    loading: Loading,
});

const About = Loadable({
    loader: () => import('./routes/About'),
    loading: Loading,
});

class App extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        import('./texts')
            .then(({hello}) => {
                this.setState({
                    msg: hello,
                })
            })
            .catch(err => {

            });
    }

    render() {
        return (
            <Router>
                <div>
                    <div>{this.state.msg || 'hello'}</div>
                    <Hello/>
                    <div>
                        <Link to={'/'}>home</Link>
                        <Link to={'/about'}>about</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
