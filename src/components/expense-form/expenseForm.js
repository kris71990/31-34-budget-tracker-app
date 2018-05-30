import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = { name: '', price: '' };


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });

    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Card' : 'Create Card';
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  card: PropTypes.object,
};

export default ExpenseForm;
