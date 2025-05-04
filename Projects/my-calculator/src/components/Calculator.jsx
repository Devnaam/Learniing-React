import React, { useState } from 'react';
import './Calculator.css';

const buttons = [
  ['2nd', '(', ')', '%', 'mc', 'm+', 'm-', 'mr'],
  ['1/x', 'x²', 'x³', 'y^x', 'C', '+/-', '+', '×'],
  ['xⁿ', '√', 'ⁿ√x', 'log', '7', '8', '9', '−'],
  ['sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'log₂', '4', '5', '6', '+'],
  ['sinh⁻¹', 'cosh⁻¹', 'tanh⁻¹', '2^x', '1', '2', '3', '='],
  ['Deg', 'π', 'EE', 'Rand', '0', '.', '-', '=']
];

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (val) => {
    if (val === 'C') return setDisplay('');
    if (val === '=') {
      try {
        setDisplay(eval(display.replace('×', '*').replace('−', '-')));
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => prev + val);
    }
  };

  return (
    <div className="calculator card shadow-lg p-3 bg-dark text-white rounded">
      <div className="display bg-light text-end text-black p-3 fs-3 rounded">{display || '0'}</div>
      <div className="buttons mt-3">
        {buttons.map((row, i) => (
          <div className="d-flex mb-2 justify-content-between" key={i}>
            {row.map((btn, j) => (
              <button
                key={j}
                onClick={() => handleClick(btn)}
                className={`btn ${
                  btn === '='
                    ? 'btn-warning fw-bold'
                    : ['+', '-', '×', '−', 'C'].includes(btn)
                    ? 'btn-secondary'
                    : 'btn-outline-light'
                } flex-fill mx-1`}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
