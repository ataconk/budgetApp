import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, {history} from '../src/routers/AppRouter'
import LoadingPage from './components/LoadingPage'
import { startSetExpenses} from '../src/actions/expenses';
import getVisibleExpenses from '../src/selectors/expenses'
import { login, logout } from '../src/actions/auth'
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
ReactDOM.render(<LoadingPage/>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }
        })
        history.push()
        console.log('log in')
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log('log out')
    }
})