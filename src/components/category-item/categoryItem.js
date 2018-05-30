import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../actions/category';
import * as cardActions from '../../actions/card';
import CardForm from '../card-form/cardForm';
import CardItem from '../card-item/cardItem';

import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const {
      category, key, categoryDestroy, categoryUpdate, cards, cardCreate,
    } = this.props;
    
    const categoryCards = cards[category.id];

    return (
      <div className="category" key={key}>
        <h1>{category.name} - ${category.budget}</h1>
        <div className="category-display">
          <CategoryForm category={category} onComplete={categoryUpdate}/>
          <button className="delete" onClick={() => categoryDestroy(category)}>Delete</button>
        </div>
        <CardForm category={category} onComplete={cardCreate}/>
        <div className="card-list">
        {
          categoryCards.map((card, i) => <CardItem card={card} key={i}/>)
        }
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cardCreate: data => dispatch(cardActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
