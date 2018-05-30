import uuid from 'uuid';

const create = ({ content, sectionId }) => ({
  type: 'CARD_CREATE',
  payload: {
    content, sectionId, id: uuid(),
  },
});

const update = card => ({
  type: 'CARD_UPDATE',
  payload: card,
});

const destroy = card => ({
  type: 'CARD_DESTROY',
  payload: card,
});

export { create, update, destroy };
