import React, { useState } from "react";

import styles from "./CalculatorForm.module.css";

function CalculatorForm(props) {
  const [currSavings, setCurrSavings] = useState();
  const [yearlySavings, setYearlySavings] = useState();
  const [expectedInterest, setExpectedInterest] = useState();
  const [investmentDuration, setInvestmentDuration] = useState();

  const currSavingsChangeHandler = (event) => {
    setCurrSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expectedInterestChangeHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const investmentDurationChangeHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const resetInputsHandler = () => {
    setCurrSavings();
    setYearlySavings();
    setExpectedInterest();
    setInvestmentDuration();
  };
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className={styles.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationChangeHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetInputsHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
