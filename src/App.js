import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [filteredYear, setFilteredYear] = useState("2021");

  const displayExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const addExpenseHandler = (expense) => {
    console.log("In App.js", expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterValueChangeHandler = (filteredValue) => {
    console.log("App.js filteredValue", filteredValue);
    setFilteredYear(filteredValue);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        filteredYear={filteredYear}
        expenses={displayExpenses}
        onFilterValueChange={filterValueChangeHandler}
      />
    </div>
  );
};

export default App;
