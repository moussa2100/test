import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducers from './store/reducers/rootreducer'
import thunk from 'redux-thunk'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import confg from './config/firebaseConfig'


const mystore = createStore(reducers,
    compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })),
       reduxFirestore(confg),
       reactReduxFirebase(confg)
    )
    );

ReactDOM.render(
<Provider store = {mystore}>
<App />
</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
