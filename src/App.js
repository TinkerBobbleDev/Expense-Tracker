import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem.component";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
  ];
  return (
    <div className="App">
      <h2>Hello All</h2>
      <ExpenseItem
        title={expenses[0].title}
        id={expenses[0].id}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
