# Expense Tracker

A **simple full-stack Expense Tracker** that allows you to **add**, **edit**, and **delete** expenses, and visualize them with a **pie chart**. There is **no user authentication** in this version, so all expenses belong to a single, shared account.

---

## Table of Contents
1. [Introduction](#introduction)  
2. [Project Structure](#project-structure)  
3. [Prerequisites](#prerequisites)  
4. [Installation & Setup](#installation--setup)  
   - [Backend Setup](#backend-setup)  
   - [Frontend Setup](#frontend-setup)  
5. [Running the Application](#running-the-application)  
6. [Usage](#usage)  
7. [Dependencies](#dependencies)  
   - [Backend Dependencies](#backend-dependencies)  
   - [Frontend Dependencies](#frontend-dependencies)  
8. [Troubleshooting](#troubleshooting)  
9. [License](#license)

---

## Introduction

- **Add expenses** with amount, category, description, and date.
- **Edit or delete** existing expenses.
- **View a pie chart** (using `react-chartjs-2` and `Chart.js`) to visualize spending by category.
- **Styled** with [Tailwind CSS](https://tailwindcss.com/) for a responsive UI.


---

---

## Prerequisites

1. **Node.js** (v14 or higher)
2. **NPM** or **Yarn**
3. **MongoDB** (local instance or remote, e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## Installation & Setup

### Backend Setup
 **Navigate to the backend folder** :
   ```bash
   cd expense-track/backend
   ```
 **Navigate to the backend folder**:
  ```bash
   npm install
   ```
 **Create .env file**:  
    PORT=5000
  MONGO_URI=mongodb://localhost:27017/expense-tracker
### Backend Setup
 ```bash
  cd expense-track/frontend
    npm install
   ```
  
##Running Application    