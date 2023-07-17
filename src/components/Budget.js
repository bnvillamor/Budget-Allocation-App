import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget.toString());
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (e) => {
        const updatedBudget = parseInt(e.target.value);
        if (updatedBudget > 20000) {
            alert('Budget cannot exceed 20,000');
            setNewBudget(budget.toString());
        } else if (updatedBudget < totalExpenses) {
            alert('Budget cannot be less than spent');
            setNewBudget(budget.toString());
        } else {
            setNewBudget(updatedBudget.toString());
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor='budgetInput' style={{ marginRight: '0.5rem' }}>Budget: {currency}</label>
                <input
                    required='required'
                    type='number'
                    step='10'
                    id='budgetInput'
                    style={{ size: 10 }}
                    value={newBudget}
                    onChange={handleBudgetChange}
                />
            </div>
        </div>
    );
};

export default Budget;