import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      
      if (key >= '0' && key <= '9') {
        inputNumber(parseInt(key));
      } else if (key === '.') {
        inputDecimal();
      } else if (key === '+') {
        inputOperation('+');
      } else if (key === '-') {
        inputOperation('-');
      } else if (key === '*') {
        inputOperation('×');
      } else if (key === '/') {
        event.preventDefault();
        inputOperation('÷');
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        performCalculation();
      } else if (key === 'Escape') {
        clear();
      } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [display, previousValue, operation, waitingForOperand]);

  return (
    <div className="calculator">
      <div className="calculator-display">
        {display}
      </div>
      <div className="calculator-buttons">
        <button className="calculator-btn calculator-btn-clear" onClick={clear}>
          C
        </button>
        <button className="calculator-btn calculator-btn-operator" onClick={deleteLast}>
          ⌫
        </button>
        <button className="calculator-btn calculator-btn-operator" onClick={() => inputOperation('÷')}>
          ÷
        </button>
        <button className="calculator-btn calculator-btn-operator" onClick={() => inputOperation('×')}>
          ×
        </button>

        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(7)}>
          7
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(8)}>
          8
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(9)}>
          9
        </button>
        <button className="calculator-btn calculator-btn-operator" onClick={() => inputOperation('-')}>
          -
        </button>

        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(4)}>
          4
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(5)}>
          5
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(6)}>
          6
        </button>
        <button className="calculator-btn calculator-btn-operator" onClick={() => inputOperation('+')}>
          +
        </button>

        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(1)}>
          1
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(2)}>
          2
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={() => inputNumber(3)}>
          3
        </button>
        <button 
          className="calculator-btn calculator-btn-equals" 
          rowSpan="2" 
          onClick={performCalculation}
        >
          =
        </button>

        <button className="calculator-btn calculator-btn-number calculator-btn-zero" onClick={() => inputNumber(0)}>
          0
        </button>
        <button className="calculator-btn calculator-btn-number" onClick={inputDecimal}>
          .
        </button>
      </div>
    </div>
  );
}
