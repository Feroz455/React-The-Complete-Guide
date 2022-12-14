import "./ExpenseForm.css";
import React, { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnterTitle] = useState("");
  function titleChangeHandler(e) {
    setEnterTitle(e.target.value);
  }

  const [enteredAmount, setEnterAmount] = useState("");
  function AmountChangeHandler(e) {
    setEnterAmount(e.target.value);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
