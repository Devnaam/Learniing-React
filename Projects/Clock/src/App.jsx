import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const formatDateTime = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-based
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-IN');
    return `${day}/${month}/${year} - ${time}`;
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold">
        <u>Bharat Clock</u>
      </h1>
      <p className="fs-4 mt-3">This is the clock that shows the time in Bharat at all times</p>
      <p className="fs-4 mt-4">This is the current time: {formatDateTime(currentTime)}</p>
    </div>
  );
}

export default App;
