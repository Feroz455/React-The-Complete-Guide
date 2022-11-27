import "./ExpensItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpensItem(props) {
  let { title: expenseTitle, amount: expenseAmount } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">
          ${expenseAmount.toString().padStart(6, 0)}
        </div>
      </div>
    </Card>
  );
}
export default ExpensItem;
