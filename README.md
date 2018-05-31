# Budget Tracker App

**Author** Kris Sakarias

**Version** 1.0.0 

## Overview
This is a React app that allows a user to keep track of expenses.

### Documentation
Starting the Webpack Dev Server:

```
git clone https://github.com/kris71990/31-34-budget-tracker-app

npm i

npm run watch
```

**Component Structure**
```
Provider
  App 
    Dashboard
      CategoryForm 
        CategoryItem[Category Form]
          ExpenseForm
            ExpenseItem[Expense Form]
```

- Provider - parent wrapper component redux uses to manage the application state

- App - renders the dashboard

- Dashboard - renders a form to fill out an entry into the budget tracker, as well as all items in the budget tracker

- CategoryForm
  - Field 1 
    - Name - name of category of expenses
  - Field 2
    - Budget - Amount of money ($) dedicated to each category of expenses

- CategoryItem
  - Displays category and budget of a single category of expenses
  - Also renders the CategoryForm component for ability to edit or delete the item

- ExpenseForm
  - Field 1
    - Name - name of an expense
  - Field 2
    - Price - price of a single expense

- ExpenseItem 
  - Displays an expense and price of a single expense item
  - Also renders an ExpenseForm component for the ability to edit or delete an expense