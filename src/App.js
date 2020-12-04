import React, { useState } from "react";
import ResultScreen from "./ResultScreen";
import InputPad from "./InputPad";
import ResultKey from "./ResultKey";

import "./styles.css";

import {
  ONE_KEY,
  TWO_KEY,
  THREE_KEY,
  FOUR_KEY,
  FIVE_KEY,
  SIX_KEY,
  SEVEN_KEY,
  EIGHT_KEY,
  NINE_KEY,
  ZERO_KEY,
  DZERO_KEY,
  PLUS_KEY,
  MINUS_KEY,
  MULT_KEY,
  DIV_KEY,
  DOT_KEY,
  CLEAR_KEY,
  ROTATE_KEY
} from "./constants";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");
  const [resultSubmitted, setResultSubmitted] = useState(false);

  const handleClick = (action) => {
    const changeOperator = (action) => {
      if (
        currentNumber &&
        previousNumber &&
        currentOperator &&
        !resultSubmitted
      ) {
        setCurrentOperator(action);
        handleResult();
      } else {
        setPreviousNumber(currentNumber);
        setCurrentNumber("");
        setCurrentOperator(action);
      }
    };
    let currentNumberAux = currentNumber;
    if (resultSubmitted) {
      currentNumberAux = "";
      setResultSubmitted(false);
    }

    const processNumber = (action) => {
      if (currentNumberAux.length < 8) {
        setCurrentNumber(`${currentNumberAux}${action}`);
      }
    };

    switch (action) {
      case ONE_KEY:
      case TWO_KEY:
      case THREE_KEY:
      case FOUR_KEY:
      case FIVE_KEY:
      case SIX_KEY:
      case SEVEN_KEY:
      case EIGHT_KEY:
      case NINE_KEY:
      case ZERO_KEY:
      case DZERO_KEY:
      case DOT_KEY:
        processNumber(action);
        break;
      case PLUS_KEY:
      case MINUS_KEY:
      case MULT_KEY:
      case DIV_KEY:
        changeOperator(action);
        break;
      case CLEAR_KEY: {
        setCurrentNumber("");
        setPreviousNumber("");
        setCurrentOperator("");
        break;
      }
      case ROTATE_KEY: {
        const [first, ...rest] = currentNumber;
        const rotatedNumber = [...rest, first];
        setCurrentNumber(rotatedNumber.join(""));
        break;
      }

      default:
        break;
    }
  };
  const handleResult = (clickedEqual) => {
    const currentFloat = parseFloat(currentNumber);
    const previousFloat = parseFloat(previousNumber);
    let processedNumber;
    switch (currentOperator) {
      case PLUS_KEY:
        processedNumber = (currentFloat + previousFloat).toString();
        break;
      case MINUS_KEY:
        processedNumber = (previousFloat - currentFloat).toString();
        break;
      case MULT_KEY:
        processedNumber = (currentFloat * previousFloat).toString();
        break;
      case DIV_KEY:
        processedNumber = (previousFloat / currentFloat).toString();
        break;

      default:
        break;
    }

    setCurrentNumber(processedNumber);
    if (clickedEqual) {
      setPreviousNumber("");
    } else {
      setPreviousNumber(processedNumber);
    }
    setResultSubmitted(true);
  };

  return (
    <div className="App">
      <ResultScreen number={currentNumber} />
      <InputPad onClickHandler={handleClick} />
      <ResultKey onResultClicked={handleResult} />
    </div>
  );
};

export default App;
