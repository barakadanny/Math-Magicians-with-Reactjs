import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateObject = (e) => {
    const buttonName = e.target.textContent;
    const myObj = calculate(state, buttonName);
    setState(myObj);
    // console.log(myObj);
  };

  const { total, next, operation } = state;
  const op = operation === '%' ? '%' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <div className="calculator-container">
      <div className="calculator-usage">Lets do some Math!</div>
      <div className="calculator">
        <div className="result">
          <p>{result || 0}</p>
        </div>

        <span onClick={updateObject} role="presentation">
          AC
        </span>
        <span onClick={updateObject} role="presentation">
          +/-
        </span>
        <span onClick={updateObject} role="presentation">
          %
        </span>
        <span onClick={updateObject} role="presentation" className="operator">
          ÷
        </span>

        <span onClick={updateObject} role="presentation">
          7
        </span>
        <span onClick={updateObject} role="presentation">
          8
        </span>
        <span onClick={updateObject} role="presentation">
          9
        </span>
        <span onClick={updateObject} role="presentation" className="operator">
          x
        </span>

        <span onClick={updateObject} role="presentation">
          4
        </span>
        <span onClick={updateObject} role="presentation">
          5
        </span>
        <span onClick={updateObject} role="presentation">
          6
        </span>
        <span onClick={updateObject} role="presentation" className="operator">
          -
        </span>

        <span onClick={updateObject} role="presentation">
          1
        </span>
        <span onClick={updateObject} role="presentation">
          2
        </span>
        <span onClick={updateObject} role="presentation">
          3
        </span>
        <span onClick={updateObject} role="presentation" className="operator">
          +
        </span>

        <span onClick={updateObject} role="presentation" className="double">
          0
        </span>
        <span onClick={updateObject} role="presentation">
          .
        </span>
        <span onClick={updateObject} role="presentation" className="operator">
          =
        </span>
      </div>
    </div>
  );
};

export default Calculator;
