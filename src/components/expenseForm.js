import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={ 
            description: props.expense ?  props.expense.description :'',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString(): '',
            createdAt: props.createdAt ? moment(props.expense.createdAt): moment(),
            focused: false,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description}))
    }

    onNoteChange = (e) => {
        e.persist() //same thing like above
        this.setState(()=> ({note: e.target.value}))
    }
    
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=> ({amount}));
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(()=> ({ createdAt }));

        }
    }

    onFocusChange = ({ focused } ) => {
        this.setState(() => ({ focused:focused }));
    }

    onSubmit = (e) => {
        e.preventDefault(); //prevents full page refresh
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount'}))
        }else{
            this.setState(()=>({
                error:''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            })
            console.log('calisti')
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}

                    <input
                        type="text"
                        placeholder="Description"
                        className="text-input"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value = {this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (opt)'
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Add Expense </button>

                    </div>
                </form>
        )
    }
}

