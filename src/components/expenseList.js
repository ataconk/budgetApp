import React from 'react';
import {connect } from 'react-redux';
import ExpenseListItem from './expenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    //props.expense.map expense icindeki tum itemlari donduruyor
    // ...expense spread out operator
    <div>
        {props.expenses.map((expense) => {
            return  <ExpenseListItem key={expense.id}{...expense}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
