import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/common/index.js';
import Home from './components/home/index.js';
import News from './components/news/index.js';

// import './style/nav.scss';
// import './style/common.scss';
// import './style/slider.scss';
// import './style/connect.scss';
// import './style/footer.scss';
// import './style/news.scss';
// import './style/friend.scss';


render((
<Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
  	<Route path='home' component={Home} />
  	<Route path='news' component={News} />
  </Route>
</Router>

), document.getElementById('app'));
