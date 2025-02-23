import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import "./Home.css";

export const Home = () => {
  const [filterDate, setFilterDate] = useState("Past Week");
  const [filterType, setFilterType] = useState("All");
  const [expenses, setExpenses] = useState([
    { date: "2025-02-21", title: "Groceries", amount: 50, type: "expense", category: "Food" },
    { date: "2025-02-20", title: "Salary", amount: 10000, type: "income", category: "Work" },
    { date: "2025-02-19", title: "Books", amount: 100, type: "expense", category: "Education" },
    { date: "2025-02-18", title: "Part-time", amount: 300, type: "income", category: "Work" },
    { date: "2025-02-17", title: "Dine", amount: 300, type: "expense", category: "Food" },
  ]);

  const handleDelete = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filterType !== "All" && expense.type !== filterType.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="home-page">
      <Appbar />

      {/* Filters */}
      <div className="filters">
        <select
          className="filter-select"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        >
          <option>Past Week</option>
          <option>Present Month</option>
          <option>Till now</option>
        </select>
        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option>All</option>
          <option>Expense</option>
          <option>Income</option>
        </select>
        <Button
          label="Reset"
          className="reset-button"
          onClick={() => {
            setFilterDate("Past Week");
            setFilterType("All");
          }}
        />
      </div>

      {/* Centered Table */}
      <div className="table-container">
        <div className="table-wrapper">
          <table className="expense-table">
            <thead>
              <tr className="table-header">
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index} className="table-row">
                  <td>{expense.date}</td>
                  <td>{expense.title}</td>
                  <td>${expense.amount}</td>
                  <td
                    className={
                      expense.type === "income" ? "type-income" : "type-expense"
                    }
                  >
                    {expense.type}
                  </td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(index)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="6" className="no-records">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};