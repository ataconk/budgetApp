import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from '../src/routers/AppRouter'
import { startSetExpenses} from '../src/actions/expenses';
import getVisibleExpenses from '../src/selectors/expenses'
import { setTextFilter } from '../src/actions/filters'
import {firebase} from './firebase/firebase'

const store =configureStore();

const state = store.getState()


const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('log in')
    }else{
        console.log('log out')
    }
})