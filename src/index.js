import React from 'react';
import {createStore , compose} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './containers/store/reducer'

const componentEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reactRedux = createStore(reducer , componentEnhance())

ReactDOM.render( <Provider store={reactRedux}><App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
