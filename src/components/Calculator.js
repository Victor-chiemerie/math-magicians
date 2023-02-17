import './Calculator.css';
import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import Buttons from './CalcBtns';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = Calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  return (
    <section className="calculator">
      <div className="screen">
        {state.next || state.operation || state.total || 0}
      </div>
      <Buttons onclick={handleClick} />
    </section>
  );
};

export default Calculator;
