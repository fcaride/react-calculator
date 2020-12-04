import React from "react";
import "./styles.css";

const ResultScreen = ({ onClickHandler, action, isTopButton }) => (
  <button
    className={
      isTopButton ? "commonButton topButtonKey" : "commonButton buttonKey"
    }
    onClick={() => onClickHandler(action)}
  >
    {action}
  </button>
);
export default ResultScreen;
