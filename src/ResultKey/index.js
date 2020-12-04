import React from "react";
import "./styles.css";

const ResultScreen = ({ onResultClicked }) => (
  <button className="resultKey" onClick={() => onResultClicked(true)}>
    =
  </button>
);
export default ResultScreen;
