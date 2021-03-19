import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment'

test('should genereate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

})

test('should genereate set end date action object', ()=>{

    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
    
})

test('should generate set text filter action object', () => {
    const action = setTextFilter('text')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'text'
    })
})

test('should generate action object for sort by date', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })

})

test('should generate action object for sort by amount', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
    
})