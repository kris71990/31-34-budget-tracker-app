import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form/expenseForm';
import * as expenseActions from '../../actions/expense';

import './expenseItem.scss';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
      <div className="expense">
        <p>{expense.name} - ${expense.price}</p>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
        <button onClick={() => expenseDestroy(expense)}>Delete Expense</button>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseUpdate: PropTypes.func,
  expenseDestroy: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseActions.destroy(data)),
  expenseUpdate: data => dispatch(expenseActions.update(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
