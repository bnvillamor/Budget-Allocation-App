import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const AllocationForm = (props) => {
    const { dispatch, remaining, currency  } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    const submitEvent = () => {
            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  ", {currency}+remaining);
                setCost("");
                return;
            }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    return (
        <div>
            <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Categories</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Savings" name="savings"> Savings</option>
                <option value="Car" name="car">Car</option>
                <option value="Groceries" name="groceries">Groceries</option>
                <option value="Gas" name="gas">Gas</option>
                <option value="Rent" name="rent">Rent</option>
                  </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                        <label htmlFor='cost' style={{ marginRight: '0.5rem' }}>{currency}</label>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            style={{ size: 10 }}
                            onChange={(event) => setCost(event.target.value)}
                    />
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                  </div>
                </div>
                </div>
        </div>
    );
};
export default AllocationForm;
