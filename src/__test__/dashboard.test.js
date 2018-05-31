import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../components/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard', () => {

  const testState = {
    categories: [
      {
        name: 'Kris',
        budget: 10,
        id: 314,
        timestamp: new Date(),
      },
      {
        name: 'test',
        budget: 15,
        id: 315,
        timestamp: new Date(),
      },
    ],
    expenses: {
      314: [],
      315: [],
    },
  };

  test('testing dashboard and store', () => {
    const middleware = [];
    const mockStore = configureStore(middleware);
    const mountedDashboard = mount(<Provider store={mockStore(testState)}><Dashboard/></Provider>);

    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem')).toHaveLength(2);
  });
});
