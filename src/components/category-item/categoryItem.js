import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../actions/category';

class CategoryItem extends React.Component {
  render() {
    const {
      category, key, categoryDestroy, categoryUpdate,
    } = this.props;
    return (
      <div className="category" key={key}>
        <h1>{category.name}</h1>
        <button onClick={() => categoryDestroy(category)}>Delete</button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
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
