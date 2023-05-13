import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers');
      return false;
    }

    if (!isValidNumber(num1) || !isValidNumber(num2)) {
      setErrorMessage('Please enter valid numbers');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const isValidNumber = (value) => {
    return /^-?\d+\.?\d*$/.test(value);
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${result}`);
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${result}`);
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const result = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${result}`);
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setErrorMessage('Cannot divide by zero');
        return;
      }

      const result = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${result}`);
    }
  };

  return (
    
    <div className="calculator-container">
        <h2>React Calculator</h2>
        
      <div className="calculator-inputs">
        <input
          type="text"
          className="calculator-input"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="text"
          className="calculator-input"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button className="calculator-button" onClick={handleAddition}>
          Add
        </button>
        <button className="calculator-button" onClick={handleSubtraction}>
          Subtract
        </button>
        <button className="calculator-button" onClick={handleMultiplication}>
          Multiply
        </button>
        <button className="calculator-button" onClick={handleDivision}>
          Divide
        </button>
      </div>
      {errorMessage && <div className="calculator-error">{errorMessage}</div>}
      {result && <div className="calculator-success">{result}</div>}
    </div>
    
  );
}

export default Calculator;
