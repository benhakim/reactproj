import React from 'react';
import ReactDOM from 'react-dom' ;
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import shopReducer from './store/reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(shopReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root')
);
 



