 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const API_URL = 'http://localhost:5000/expenses';

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(API_URL);
      setExpenses(res.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expenseData) => {
    try {
      await axios.post(API_URL, expenseData);
      fetchExpenses();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const editExpense = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      setExpenseToEdit(null);
      fetchExpenses();
    } catch (error) {
      console.error('Error editing expense:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchExpenses();
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const clearEdit = () => {
    setExpenseToEdit(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Expense Tracker</h1>
        <ExpenseForm
          addExpense={addExpense}
          editExpense={editExpense}
          expenseToEdit={expenseToEdit}
          clearEdit={clearEdit}
        />
        <ExpenseList
          expenses={expenses}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
        <Dashboard expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
