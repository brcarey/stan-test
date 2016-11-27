import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Home} from './home';
import {Series} from './series';
import {Movies} from './movies';
import {Master} from './layout/master';
import './styles.less';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Master}>
            <Route path="series" component={Series} />
            <Route path="movies" component={Movies} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
), document.getElementById('app'))