import { ADD_FAVORITE, DELETE_FAVORITE, AVOID_REPEATED } from '../Types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
        error: null,
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== payload
        ),
        error: null,
      };
    case AVOID_REPEATED:
      return {
        ...state,
        error: 'You already have this character added to favorites.',
      };
    default:
      return state;
  }
};
