import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleCurrencyChange = (e) => {
    const updatedCurrency = e.target.value;
    setNewCurrency(updatedCurrency);
  
    let currencySymbol = '';
    switch (updatedCurrency) {
      case 'dollar':
        currencySymbol = '$';
        break;
      case 'pound':
        currencySymbol = '£';
        break;
      case 'euro':
        currencySymbol = '€';
        break;
      case 'rupee':
        currencySymbol = '₹';
        break;
      default:
        currencySymbol = '';
    }
  
    dispatch({
      type: 'CHG_CURRENCY',
      payload: {
        currency: updatedCurrency,
        symbol: currencySymbol,
      },
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
        <option value='dollar'>$ Dollar</option>
        <option value='pound'>£ Pound</option>
        <option value='euro'>€ Euro</option>
        <option value='rupee'>₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;