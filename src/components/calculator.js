import React from 'react';
import './calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="result-area"><p className="result">0</p></div>

        <div className="All-btns">
          <button type="button" className="AC">AC</button>
          <button type="button" className="PM">+/-</button>
          <button type="button" className="modules">%</button>
          <button type="button" className="div gold">÷</button>
          <button type="button" className="seven">7</button>
          <button type="button" className="eigth">8</button>
          <button type="button" className="nine">9</button>
          <button type="button" className="x gold">x</button>
          <button type="button" className="four">4</button>
          <button type="button" className="five">5</button>
          <button type="button" className="six">6</button>
          <button type="button" className="minus gold">-</button>
          <button type="button" className="one">1</button>
          <button type="button" className="two">2</button>
          <button type="button" className="three">3</button>
          <button type="button" className="plus gold">+</button>
          <button type="button" className="zero">0</button>
          <button type="button" className="dot">.</button>
          <button type="button" className="equal">=</button>

        </div>
      </div>
    );
  }
}
export default Calculator;
