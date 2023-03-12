import { useState } from "react";

import "./ExpenseForm.styles.css";

function ExpenseForm(props) {
  const [formValue, updateFormValue] = useState({
    enteredDate: "",
    enteredAmount: "",
    enteredTitle: "",
  });

  function SubmitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: formValue.enteredTitle,
      amount: formValue.enteredAmount,
      date: new Date(formValue.enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    updateFormValue({ enteredDate: "", enteredAmount: "", enteredTitle: "" });
  }
  function updateTitle(event) {
    updateFormValue((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });
  }
  function updateAmount(event) {
    updateFormValue((previousState) => {
      return {
        ...previousState,
        enteredAmount: event.target.value,
      };
    });
  }
  function updateDate(event) {
    updateFormValue((previousState) => {
      return {
        ...previousState,
        enteredDate: event.target.value,
      };
    });
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formValue.enteredTitle}
            onChange={updateTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formValue.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={updateAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={formValue.enteredDate}
            onChange={updateDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
