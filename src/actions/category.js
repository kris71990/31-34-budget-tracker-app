import uuid from 'uuid';

const create = ({ name }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    id: uuid(),
    timestamp: new Date(),
    budget: '',
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const destroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, destroy };
