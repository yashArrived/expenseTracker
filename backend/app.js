const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

 
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

 
app.use(cors()); 
app.use(express.json());

 
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://yash:tiwari@cluster0.uj9zl7s.mongodb.net/devHub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  
  });

 
const expenseRoutes = require('./routes/expenses');
app.use('/expenses', expenseRoutes);
 
 
app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

 
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
