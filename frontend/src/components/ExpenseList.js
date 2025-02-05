 import React from 'react';

const ExpenseList = ({ expenses, setExpenseToEdit, deleteExpense }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Expenses</h2>
      <ul>
      {expenses?.map(expense => (
          <li key={expense._id} className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-center">
              <div>
                <strong className="text-gray-900">{expense.category}</strong>
                <p className="text-gray-600">${expense.amount} on {new Date(expense.date).toLocaleDateString()}</p>
                {expense.description && <p className="text-gray-500 italic">{expense.description}</p>}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => setExpenseToEdit(expense)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteExpense(expense._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
