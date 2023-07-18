import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleCurrencyChange = (e) => {
    const updatedCurrency = e.target.value;
    setNewCurrency(updatedCurrency);
  
    dispatch({
      type: 'CHG_CURRENCY',
      payload: updatedCurrency,
    });
  };

  return (
    <div className='alert alert-success' style={{ color: 'white', backgroundColor: 'lightgreen' }}>
      <label htmlFor='currencySelect' style={{ display: 'inline-block', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
        Currency:
      </label>
      <select
        id='currencySelect'
        style={{
          marginLeft: '0.5rem',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: 'lightgreen',
          color: 'white',
        }}
        value={newCurrency}
        onChange={handleCurrencyChange}
      >
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;