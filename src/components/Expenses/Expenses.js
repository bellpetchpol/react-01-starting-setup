import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  // const [filteredValue, setFilteredValue] = useState("");

  const expenses = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });

  const filterValueChangeHandler = value => {
    console.log('Expenses.js filteredValue',value);
    props.onFilterValueChange(value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={props.filteredYear} onFilterValueChange={filterValueChangeHandler} />
        {expenses} 
      </Card>
    </div>
  );
};

export default Expenses;
