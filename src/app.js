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
store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 3000,
    createdAt: 3000
}))

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 5000,
    createdAt: 2500
}))

store.dispatch(addExpense({
    description: 'Rent Bill',
    amount: 109500,
    createdAt: 7000
}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
