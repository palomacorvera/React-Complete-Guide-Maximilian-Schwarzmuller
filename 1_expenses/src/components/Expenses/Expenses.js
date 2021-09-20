import React, {useState} from 'react';
import ExpensesList from './List/ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './Filter/ExpensesFilter';
import ExpensesChart from './Chart/ExpensesChart';

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/> 
        </Card>
    );
}

export default Expenses;