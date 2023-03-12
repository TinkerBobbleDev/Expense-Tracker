import "./NewExpense.styles.css";
import ExpenseForm from "../NewExpenseForm/ExpenseForm.component";
import { useContext } from "react";
import { ExpenseContext } from "../../../Contexts/Expense.context";

function NewExpense(props) {
  function saveExpenseData(exData) {
    const expenseData = {
      ...exData,
      id: `${Math.random() + new Date().getMilliseconds}`,
    };
    console.log(expenseData);
    props.saveExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpense;
