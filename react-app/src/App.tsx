import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1, category: "A" },
    { id: 2, description: "abb", amount: 4, category: "B" },
    { id: 3, description: "bbb", amount: 5, category: "C" },
    { id: 4, description: "bbc", amount: 10, category: "A" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
