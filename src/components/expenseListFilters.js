import React from 'react';
import  { connect } from 'react-redux'
import  { setTextFilter, sortByAmount, sortByDate,setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component{
    state = {
        focused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))

    }

    onFocusChange = (focused) => {
        this.setState(() => ({focused}))
    }
    render(){
        return(
        <div className="content-container">
            <div className="input-group">
                <div className= "input-group__item">
                    <input type='text' 
                           value ={this.props.filters.text}
                           placeholder="Search expenses"
                           className = "text-input"
                           onChange={(e)=>{
                    this.props.dispatch(setTextFilter(e.target.value));
                        }}/>
                </div>  
                <div className= "input-group__item">
                    <select
                        className="select"
                        value = {this.props.filters.sortBy} 
                        onChange={(e) => {
                            let ourVal = e.target.value
                            if(ourVal==='date'){
        
                                this.props.dispatch(sortByDate())
        
                            }else if(ourVal === 'amount'){
                                this.props.dispatch(sortByAmount())
                            }
                        }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                    </select>    
                </div>  
                <div className= "input-group__item">
                    <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange ={this.onDatesChange}
                    focusedInput= {this.state.focused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    />
                </div>  

            </div>
            
        </div>
        )
    }
    
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);