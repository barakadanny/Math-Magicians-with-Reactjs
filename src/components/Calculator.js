import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
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
  const op = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <div className='calculator'>
      <div className='result'>
        <p>{result || 0}</p>
      </div>

      <span onClick={updateObject}>AC</span>
      <span onClick={updateObject}>+/-</span>
      <span onClick={updateObject}>%</span>
      <span onClick={updateObject} className='operator'>
        ÷
      </span>

      <span onClick={updateObject}>7</span>
      <span onClick={updateObject}>8</span>
      <span onClick={updateObject}>9</span>
      <span onClick={updateObject} className='operator'>
        x
      </span>

      <span onClick={updateObject}>4</span>
      <span onClick={updateObject}>5</span>
      <span onClick={updateObject}>6</span>
      <span onClick={updateObject} className='operator'>
        -
      </span>

      <span onClick={updateObject}>1</span>
      <span onClick={updateObject}>2</span>
      <span onClick={updateObject}>3</span>
      <span onClick={updateObject} className='operator'>
        +
      </span>

      <span onClick={updateObject} className='double'>
        0
      </span>
      <span onClick={updateObject}>.</span>
      <span onClick={updateObject} className='operator'>
        =
      </span>
    </div>
  );
};

export default Calculator;
