import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, {history} from '../src/routers/AppRouter'
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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startSetExpenses()).then(()=>{
        renderApp()
        if(history.location.pathname==='/'){
            history.push('/dashboard')
        }
            })
        history.push()
        console.log('log in')
    }else{
        renderApp()
        history.push('/')
        console.log('log out')
    }
})