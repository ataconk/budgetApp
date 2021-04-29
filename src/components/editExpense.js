import React from 'react';
import expenseListItem from './expenseListItem';
import { connect } from 'react-redux'
import ExpenseForm from './expenseForm'
import { startEditExpense, startRemoveExpense }  from '../actions/expenses'

const EditExpensePage = (props) => (
    <div>
        This is edit expense page, id = {props.match.params.id}
        <ExpenseForm
            expense={props.expense}
            onSubmit = {(expense) => {
                props.dispatch(startEditExpense(props.expense.id, expense))
                props.history.push('/')
                console.log('updated', expense )
            }}
        />
        <button onClick={()=>{
            props.dispatch(startRemoveExpense({id: props.expense.id}))
            props.history.push('/')
        }}>Remove</button>
    </div>
)
const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
    
export default connect(mapStateToProps)(EditExpensePage);