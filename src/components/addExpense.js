import React from 'react';
import ExpenseForm from './expenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';


export class AddExp extends React.Component{
    onSubmit=(expense)=> {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
        

    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExp)

/* const AddExp = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense)=> {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
            />
    </div>
);
export default connect()(AddExp); */