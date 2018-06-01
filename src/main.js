import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import reducer from '../src/reducers/main';
import logger from './lib/redux-logger';
import storage from './lib/local-storage';

import './style/main.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, storage)));

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<Provider store={store}><App/></Provider>, container);
