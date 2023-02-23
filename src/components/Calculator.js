import './Calculator.css';
import React, { useState } from 'react';
import Calculate from '../logic/calculate';
import Btn from './butoons';

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
    <section>
      <div className="topic">Let’s do some math</div>
      <main className="calculator">
        <div className="screen">
          {state.next || state.operation || state.total || 0}
        </div>
        <div className="work">
          <Btn id="AC" handleClick={handleClick} />
          <Btn id="+/-" handleClick={handleClick} />
          <Btn id="%" handleClick={handleClick} />
          <Btn id="÷" handleClick={handleClick} styled="function" />
          <Btn id="7" handleClick={handleClick} />
          <Btn id="8" handleClick={handleClick} />
          <Btn id="9" handleClick={handleClick} />
          <Btn id="x" handleClick={handleClick} styled="function" />
          <Btn id="4" handleClick={handleClick} />
          <Btn id="5" handleClick={handleClick} />
          <Btn id="6" handleClick={handleClick} />
          <Btn id="-" handleClick={handleClick} styled="function" />
          <Btn id="1" handleClick={handleClick} />
          <Btn id="2" handleClick={handleClick} />
          <Btn id="3" handleClick={handleClick} />
          <Btn id="+" handleClick={handleClick} styled="function" />
          <Btn id="0" handleClick={handleClick} styled="zero" />
          <Btn id="." handleClick={handleClick} />
          <Btn id="=" handleClick={handleClick} styled="function" />
        </div>
      </main>
    </section>
  );
};

export default Calculator;
