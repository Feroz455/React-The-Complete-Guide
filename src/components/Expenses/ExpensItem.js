import React, { useState } from "react";
import "./ExpensItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpensItem(props) {
  const [title, setTitle] = useState(props.title);

  const ClickHandler = (e) => {
    setTitle("Update");
    console.log("Clicked!!!!", e);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${props.amount.toString().padStart(6, 0)}
        </div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpensItem;
