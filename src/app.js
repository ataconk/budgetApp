import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../src/store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from '../src/routers/AppRouter'
import { addExpense, editExpense, removeExpense } from '../src/actions/expenses';
import getVisibleExpenses from '../src/selectors/expenses'
import { setTextFilter } from '../src/actions/filters'

const store =configureStore();

const state = store.getState()


const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
