import selectExpenses from '../../selectors/expenses'

const expenses =[{
    id: '1',
    descriptions: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    descriptions: 'Rent',
    note: '',
    amount: 1295000,
    createdAt: -1000
},{
    id: '3',
    descriptions: 'Market',
    note: '',
    amount: 11244,
    createdAt: 1000
}]
test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters)

    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ])


})