import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');

  const buttons = [
    ['Rad', '2nd', '(', ')', '%', 'mc', 'm+', 'm-', 'mr'],
    ['1/x', 'x^2', 'x^y', 'y^x', 'C', '7', '8', '9', '÷'],
    ['sin^-1', 'cos^-1', 'tan^-1', 'log', '+/-', '4', '5', '6', '×'],
    ['sinh^-1', 'cosh^-1', 'tanh^-1', 'log_2', '2^x', '1', '2', '3', '-'],
    ['Deg', 'π', 'EE', 'Rand', '0', '.', '=', '+']
  ];

  const handleButtonClick = (value) => {
    try {
      if (value === '=') {
        // Replace UI symbols with mathjs-compatible ones
        let expression = display
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, 'pi')
          .replace(/log/g, 'log10')
          .replace(/log_2/g, 'log2')
          .replace(/sin\^-1/g, 'asin')
          .replace(/cos\^-1/g, 'acos')
          .replace(/tan\^-1/g, 'atan')
          .replace(/sinh\^-1/g, 'asinh')
          .replace(/cosh\^-1/g, 'acosh')
          .replace(/tanh\^-1/g, 'atanh')
          .replace(/x\^2/g, '^2')
          .replace(/x\^y/g, '^')
          .replace(/y\^x/g, '^')
          .replace(/2\^x/g, '2^')
          .replace(/1\/x/g, '1/')
          .replace(/%/, '/100');

        // Evaluate the expression using mathjs
        const result = evaluate(expression);
        setDisplay(result.toString());
      } else if (value === 'C') {
        setDisplay('0');
      } else if (value === '+/-') {
        setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
      } else if (['mc', 'm+', 'm-', 'mr', 'Rad', 'Deg', 'EE', 'Rand'].includes(value)) {
        // Placeholder for memory and mode functions (not implemented)
        return;
      } else {
        setDisplay((prev) => (prev === '0' ? value : prev + value));
      }
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="calculator bg-black p-4 rounded-lg shadow-lg">
        <div className="display bg-gray-200 text-right text-4xl p-4 rounded mb-4">{display}</div>
        <div className="grid grid-cols-9 gap-2">
          {buttons.flat().map((btn, index) => (
            <button
              key={index}
              className={`p-4 rounded text-white font-bold 
                ${btn === '=' ? 'bg-orange-500' : 
                  ['mc', 'm+', 'm-', 'mr', '+/-', '÷', '×', '-', '+'].includes(btn) ? 'bg-brown-500' : 
                  'bg-gray-500'} 
                hover:opacity-80`}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;