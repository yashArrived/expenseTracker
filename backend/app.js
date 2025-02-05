 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expenses');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
 
mongoose
  .connect("mongodb+srv://yash:tiwari@cluster0.uj9zl7s.mongodb.net/expense-tracker", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

 
// app.use('/auth', authRoutes);
 
app.use('/expenses', expenseRoutes);

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
