import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';

import App from './components/common/index.jsx';
import Home from './components/home/index.jsx';
import News from './components/news/index.jsx';

const router = 
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path="/home/:name" component={Home}/>
  	<Route path='/news' component={News} />
  </Route>
</Router>;

export default router;