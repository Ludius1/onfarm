import React, { useState } from 'react';
import './../components/sammple.css'
const conversionRates = {
    USD: 1,
    GBP: 0.76,
    NGN: 770,
  };

const CartSample = () => {
    const [currency, setCurrency] = useState('USD');
    const [prices, setPrices] = useState([
      { id: 1, priceUSD: 10.00 },
      { id: 2, priceUSD: 20.00 },
    ]);
  
    const handleCurrencyChange = (newCurrency) => {
      setCurrency(newCurrency);
    };
  
    const convertPrice = (priceUSD) => {
      return (priceUSD * conversionRates[currency]).toFixed(2);
    };
  return (
    <div className="App">
      <div className="currency-dropdown">
        <button className="currency-dropdown-button">
          {currency} <span>▼</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempore et nobis deserunt sapiente? Alias culpa, ducimus doloribus veniam assumenda aperiam consectetur eligendi nesciunt ut, harum modi quasi, doloremque laborum.
        </button>
        <div className="currency-dropdown-content">
          <a href="#" onClick={() => handleCurrencyChange('GBP')}>GBP</a>
          <a href="#" onClick={() => handleCurrencyChange('NGN')}>NGN</a>
        </div>
      </div>

      {prices.map(product => (
        <div key={product.id} className="product">
          Price: <span className="price">{convertPrice(product.priceUSD)} {currency}</span>
        </div>
      ))}
    </div>
  )
}

export default CartSample