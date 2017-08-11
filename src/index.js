import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promiseMiddleware()),
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}
