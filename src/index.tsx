import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import {Home} from './components/home';
import {Series} from './components/series';
import {Movies} from './components/movies';
import {Error} from './components/error';
import {Layout} from './layout/layout';
import './styles.css';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <Route path='series' component={Series} />
            <Route path='movies' component={Movies} />
            <Route path='error' component={Error} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
), document.getElementById('app'));