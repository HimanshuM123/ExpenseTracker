import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // debugger;
    const [title, setTitle] = useState(props.title);
    //using this syntax the component function gets executed & reevaluated
    const clickHandler = () => {
        setTitle('updated')
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>

    )

}

export default ExpenseItem;