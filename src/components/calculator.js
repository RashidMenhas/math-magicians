import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
    this.handlerevent = this.handlerevent.bind(this);
  }

     handlerevent= (event) => {
       const { target: { textContent: buttonName } } = event;
       const result = calculate(this.state, buttonName);
       this.setState(result);
     }

     render() {
       const { total, next, operation } = this.state;
       let result = '';
       if (total) {
         result = `${total} ${operation || ''} ${next || ''}`;
       } else if (next) {
         result = `${next || ''} ${operation || ''}`;
       }
       return (
         <div className="container">
           <div className="result-area"><p className="result">{result || 0}</p></div>

           <div className="All-btns">
             <button type="button" className="AC" onClick={this.handlerevent}>AC</button>
             <button type="button" className="PM" onClick={this.handlerevent}>+/-</button>
             <button type="button" className="modules" onClick={this.handlerevent}>%</button>
             <button type="button" className="div gold" onClick={this.handlerevent}>÷</button>
             <button type="button" className="seven" onClick={this.handlerevent}>7</button>
             <button type="button" className="eigth" onClick={this.handlerevent}>8</button>
             <button type="button" className="nine" onClick={this.handlerevent}>9</button>
             <button type="button" className="x gold" onClick={this.handlerevent}>x</button>
             <button type="button" className="four" onClick={this.handlerevent}>4</button>
             <button type="button" className="five" onClick={this.handlerevent}>5</button>
             <button type="button" className="six" onClick={this.handlerevent}>6</button>
             <button type="button" className="minus gold" onClick={this.handlerevent}>-</button>
             <button type="button" className="one" onClick={this.handlerevent}>1</button>
             <button type="button" className="two" onClick={this.handlerevent}>2</button>
             <button type="button" className="three" onClick={this.handlerevent}>3</button>
             <button type="button" className="plus gold" onClick={this.handlerevent}>+</button>
             <button type="button" className="zero" onClick={this.handlerevent}>0</button>
             <button type="button" className="dot" onClick={this.handlerevent}>.</button>
             <button type="button" className="equal gold" onClick={this.handlerevent}>=</button>

           </div>
         </div>
       );
     }
}
export default Calculator;
