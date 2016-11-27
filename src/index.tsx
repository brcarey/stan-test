import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Home} from './home';
import {Series} from './series';
import {Movies} from './movies';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="series" component={Series} />
      <Route path="movies" component={Movies} />
    </Route>
  </Router>
), document.getElementById('app'))