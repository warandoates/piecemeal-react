const INITIAL_STATE = {
  ingredients: [{}],
  response: {},
  success: false,
  isFetching: false,
};

const ingredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_INGREDIENT_RESULTS_REJECTED':
      return { ...state, isFetching: false, error: 'Unable To Add Ingredient' };
    case 'GET_INGREDIENT_RESULTS_PENDING':
      return { ...state, isFetching: true };
    case 'GET_INGREDIENT_RESULTS_FULFILLED':
      return { ...state, ingredients: action.payload.ingredients, isFetching: false };
    default:
      return state;
  }
};

export default ingredients;
