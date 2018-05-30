import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = { content: '' };


class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || defaultState;
    autoBind.call(this, CardForm);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.card.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });

    this.setState(defaultState);
  }

  render() {
    const { card } = this.props;
    const buttonText = card ? 'Update Card' : 'Create Card';
    return (
      <form className="card-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button>{buttonText}</button>
      </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  card: PropTypes.obj,
};

export default CardForm;
