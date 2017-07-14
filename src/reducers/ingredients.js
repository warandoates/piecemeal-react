const INITIAL_STATE = {
  allIngredients: [],
  selectedIngredient: {},
  response: {},
  isFetching: false,
  success: false,
  error: null,
};

const ingredients = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ALL_INGREDIENTS_PENDING':
      return { ...state, isFetching: true };
    case 'GET_ALL_INGREDIENTS_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: 'Unable To fetch Ingredient',
      };
    case 'GET_ALL_INGREDIENTS_FULFILLED':
      return {
        ...state,
        isFetching: false,
        allIngredients: action.payload.ingredients,
        success: true,
      };
    case 'GET_INGREDIENT_FULFILLED':
      return { ...state, selectedIngredient: action.payload };
    default:
      return state;
  }
};

export default ingredients;
