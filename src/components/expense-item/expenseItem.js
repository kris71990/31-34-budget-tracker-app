import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../expense-form/expenseForm';
import * as expenseActions from '../../actions/expense';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
      <div className="expense">
        <p>{expense.content}</p>
        <button onClick={() => expenseDestroy(expense)}></button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  card: PropTypes.object,
  cardUpdate: PropTypes.func,
  cardDestroy: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseActions.destroy(data)),
  expenseUpdate: data => dispatch(expenseActions.update(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
