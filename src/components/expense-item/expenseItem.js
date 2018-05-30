import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardForm from '../card-form/cardForm';
import * as cardActions from '../../actions/card';

class CardItem extends React.Component {
  render() {
    const { card, cardDestroy, cardUpdate } = this.props;
    return (
      <div className="card">
        <p>{card.content}</p>
        <button onClick={() => cardDestroy(card)}></button>
        <CardForm card={card} onComplete={cardUpdate}/>
      </div>
    );
  }
}

CardItem.propTypes = {
  card: PropTypes.object,
  cardUpdate: PropTypes.func,
  cardDestroy: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  cardDestroy: data => dispatch(cardActions.destroy(data)),
  cardUpdate: data => dispatch(cardActions.update(data)),
});

export default connect(null, mapDispatchToProps)(CardItem);
