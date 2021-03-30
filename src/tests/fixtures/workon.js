import selectExpensesTotal from '../../selectors.expenses-total.js/';

const expenses = [{
    id: '1',
    description: 'Gum',
    note:'',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note:'',
    amount: 1294,
    createdAt: 1
},{
    id: '3',
    description: 'cred',
    note:'',
    amount: 19544,
    createdAt: 2
}]


const total = getExpensesTotal(expenses)
console.log(total)