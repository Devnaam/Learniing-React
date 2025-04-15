import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (err) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '0', '.'
  ];

  // Split into rows of 3 buttons each
  const rows = [];
  for (let i = 0; i < buttons.length; i += 3) {
    rows.push(buttons.slice(i, i + 3));
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="border p-3 rounded shadow" style={{ width: '250px', background: '#f9f9f9' }}>
        <input
          type="text"
          className="form-control mb-3 text-end"
          value={input}
          readOnly
          style={{ height: '50px', fontSize: '1.5rem' }}
        />

        {rows.map((row, rowIndex) => (
          <div className="row mb-2" key={rowIndex}>
            {row.map((btn, colIndex) => (
              <div className="col-4" key={colIndex}>
                <button
                  onClick={() => handleClick(btn)}
                  className="btn btn-light w-100 border"
                  style={{ height: '50px', fontSize: '1.2rem' }}
                >
                  {btn}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
