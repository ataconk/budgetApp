import React from 'react';
import ExpenseList from './expenseList'
import ExpenseListFilters from './expenseListFilters'
import ExpensesSummary from './expensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList />
        <ExpensesSummary/>
    </div>
);

export default ExpenseDashboardPage;