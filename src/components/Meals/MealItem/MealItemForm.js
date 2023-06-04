import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import InputButton from "../../UI/InputButton";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] =useState(true);
  const amountInputRef = useRef();
  const submitHanlder = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
        setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <InputButton
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
