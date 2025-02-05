 import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

 ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ expenses }) => {
   const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
      <div className="w-full md:w-1/2 mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
