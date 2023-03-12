import { useState } from "react";
import { createContext } from "react";

export const ExpenseContext = createContext({
  expenseState: [],
});

export const ExpenseStateProvider = (props) => {
  // const Expensestate = {
  //   enteredDate: "",
  //   enteredAmount: "",
  //   enteredTitle: "",
  // };
  const Dummy_expenses = [
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
  const [expenseState, setExpenseState] = useState(Dummy_expenses);
  const value = { expenseState, setExpenseState };
  return (
    <ExpenseContext.Provider value={value}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
