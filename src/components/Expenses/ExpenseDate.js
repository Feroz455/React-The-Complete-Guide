import "./ExpenseDate.css";
function ExpenseDate(props) {
  let { date: expenseDate } = props;
  let month = expenseDate.toLocaleString("en-us", { month: "long" });
  let day = expenseDate.toLocaleString("en-us", { day: "2-digit" });
  let year = expenseDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year ">{year}</div>
      <div className="expense-date__day">{`${day}th`}</div>
    </div>
  );
}
export default ExpenseDate;
