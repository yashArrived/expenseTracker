const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add an expense
router.post('/', async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    // Validate required fields
    if (!amount || !category) {
      return res.status(400).json({ success: false, message: "Amount and category are required" });
    }

    const expense = new Expense({ amount, category, description, date });
    await expense.save();
    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update an expense
router.put('/:id', async (req, res) => {
  try {
    const { amount, category, description, date } = req.body;

    // Validate required fields
    if (!amount || !category) {
      return res.status(400).json({ success: false, message: "Amount and category are required" });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { amount, category, description, date },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }

    res.status(200).json({ success: true, data: updatedExpense });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

    if (!deletedExpense) {
      return res.status(404).json({ success: false, message: 'Expense not found' });
    }

    res.status(200).json({ success: true, message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
