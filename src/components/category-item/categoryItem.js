import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../actions/category';
import * as expenseActions from '../../actions/expense';
import ExpenseForm from '../expense-form/expenseForm';
import ExpenseItem from '../expense-item/expenseItem';

import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const {
      category, 
      key, 
      categoryDestroy, 
      categoryUpdate, 
      expenses, 
      expenseCreate,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    return (
      <div className="category" key={key}>
        <h1>{category.name} - ${category.budget}</h1>
        <div className="category-display">
          <CategoryForm category={category} onComplete={categoryUpdate}/>
          <button className="delete" onClick={() => categoryDestroy(category)}>Delete</button>
        </div>
        <ExpenseForm category={category} onComplete={expenseCreate}/>
        <div className="card-list">
        {
          categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)
        }
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
