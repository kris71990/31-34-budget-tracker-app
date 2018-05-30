import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../actions/category';

import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const {
      category, key, categoryDestroy, categoryUpdate,
    } = this.props;
    return (
      <div className="category" key={key}>
        <h1>{category.name} - ${category.budget}</h1>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button className="delete" onClick={() => categoryDestroy(category)}>Delete</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);
