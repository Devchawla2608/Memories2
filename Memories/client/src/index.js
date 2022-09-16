import ReactDOM from 'react-dom'
// This provider take care of the store where we are going to store our state and help to access the state from anywhere 
import { Provider } from 'react-redux'
import'./index.css'
          
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

import App from './App.js'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));