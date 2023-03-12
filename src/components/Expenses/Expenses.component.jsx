import { useState } from "react";
import Card from "../Card/card.component";
import ExpenseItem from "../ExpenseItem/ExpenseItem.component";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.component";
import "./Expenses.styles.css";
function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [Filteredexpenses, setFilteredExpenses] = useState(expenses);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
