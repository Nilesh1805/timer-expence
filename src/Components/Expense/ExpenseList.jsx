import { useState } from "react";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
        <div className="container mt-5 p-5 border border-rounded">
      <h1>Expense Tracker</h1>

      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>

      <h2>Total: ₹{total}</h2>

      {expenses.map((expense) => (
        <div key={expense.id}>
          <h4>
            {expense.title} - ₹{expense.amount} - {expense.now}
          </h4>

          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
