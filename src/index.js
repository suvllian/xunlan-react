import React from 'react';
import { render } from 'react-dom';

import App from './components/home/index.js';

import './style/nav.scss';
import './style/common.scss';

render(<App />, document.getElementById('app'));
