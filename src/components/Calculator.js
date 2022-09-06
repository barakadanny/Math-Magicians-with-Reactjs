import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className='calculator'>
        <div className='result'>
          <p></p>
        </div>

        <span className='clear grey'>AC</span>
        <span className='grey'>+/-</span>
        <span className='grey'>%</span>
        <span className='operator'>÷</span>

        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span className='operator'>x</span>

        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span className='operator'>-</span>

        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span className='operator'>+</span>

        <span className='double'>0</span>
        <span>.</span>
        <span className='operator'>=</span>
      </div>
    );
  }
}

export default Calculator;
