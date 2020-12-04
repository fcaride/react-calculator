import React from "react";
import Button from "../Button";
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
} from "../constants";

const InputPad = ({ onClickHandler }) => {
  const buildButtons = () => {
    const actions = [
      SEVEN_KEY,
      EIGHT_KEY,
      NINE_KEY,
      DIV_KEY,
      FOUR_KEY,
      FIVE_KEY,
      SIX_KEY,
      MULT_KEY,
      ONE_KEY,
      TWO_KEY,
      THREE_KEY,
      MINUS_KEY,
      ZERO_KEY,
      DZERO_KEY,
      DOT_KEY,
      PLUS_KEY
    ];
    const buttons = actions.map((action) => (
      <Button action={action} onClickHandler={onClickHandler} />
    ));
    return buttons;
  };

  return (
    <div className="inputPad">
      <div className="topButtons">
        <Button
          action={CLEAR_KEY}
          onClickHandler={onClickHandler}
          isTopButton={true}
        />
        <Button
          action={ROTATE_KEY}
          onClickHandler={onClickHandler}
          isTopButton={true}
        />
      </div>
      <div className="grid">{buildButtons()}</div>
    </div>
  );
};
export default InputPad;
