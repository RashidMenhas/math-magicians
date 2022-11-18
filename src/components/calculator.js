import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handlerevent = (event) => {
    const { target: { textContent: buttonName } } = event;
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next, operation } = state;
  let result = '';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = `${next || ''} ${operation || ''}`;
  }
  return (
    <div className="calculator">
      <h3>Lets do some math!</h3>
      <div className="container">
        <div className="result-area"><p className="result">{result || 0}</p></div>

        <div className="All-btns">
          <button type="button" className="AC" onClick={handlerevent}>AC</button>
          <button type="button" className="PM" onClick={handlerevent}>+/-</button>
          <button type="button" className="modules" onClick={handlerevent}>%</button>
          <button type="button" className="div gold" onClick={handlerevent}>÷</button>
          <button type="button" className="seven" onClick={handlerevent}>7</button>
          <button type="button" className="eigth" onClick={handlerevent}>8</button>
          <button type="button" className="nine" onClick={handlerevent}>9</button>
          <button type="button" className="x gold" onClick={handlerevent}>x</button>
          <button type="button" className="four" onClick={handlerevent}>4</button>
          <button type="button" className="five" onClick={handlerevent}>5</button>
          <button type="button" className="six" onClick={handlerevent}>6</button>
          <button type="button" className="minus gold" onClick={handlerevent}>-</button>
          <button type="button" className="one" onClick={handlerevent}>1</button>
          <button type="button" className="two" onClick={handlerevent}>2</button>
          <button type="button" className="three" onClick={handlerevent}>3</button>
          <button type="button" className="plus gold" onClick={handlerevent}>+</button>
          <button type="button" className="zero" onClick={handlerevent}>0</button>
          <button type="button" className="dot" onClick={handlerevent}>.</button>
          <button type="button" className="equal gold" onClick={handlerevent}>=</button>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
