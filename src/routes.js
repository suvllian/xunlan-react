import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.js';
import Home from './components/home/index.js';
import News from './components/news/index.js';

const router = 
<Router history={browserHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path='home' component={Home} />
  	<Route path='news' component={News} />
  </Route>
</Router>;

export default router;