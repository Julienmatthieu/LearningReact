import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import categories from "./expense-tracker/categories";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 1, category: "Groceries" },
    { id: 2, description: "abb", amount: 4, category: "Groceries" },
    { id: 3, description: "bbb", amount: 5, category: "Groceries" },
    { id: 4, description: "bbc", amount: 10, category: "Utilities" },
  ]);

  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 },
            ])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
