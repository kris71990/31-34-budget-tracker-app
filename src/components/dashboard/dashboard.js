import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as categoryActions from '../../actions/category';
import CategoryForm from '../category-form/categoryForm';
import CategoryItem from '../category-item/categoryItem';

import './dashboard.scss';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div className="dashboard">
        <CategoryForm onComplete={categoryCreate}/>
        {
          categories.categories.map((current, i) => 
            <CategoryItem category={current} key={i}/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.object,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
