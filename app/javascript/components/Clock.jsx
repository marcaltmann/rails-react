import React, { useState, useEffect } from 'react';

const ONE_SECOND = 1000;
const getCurrentTime = () => (new Date()).toLocaleTimeString();

function Clock() {
  let [counter, setCounter] = useState(getCurrentTime());

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(getCurrentTime());
    }, ONE_SECOND);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <span>{ counter }</span>
  );
}

export default Clock;
