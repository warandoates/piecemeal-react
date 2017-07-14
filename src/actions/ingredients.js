import { API_URL } from '../config/api';

export const fetchGetIngredients = () => fetch(`${API_URL}/api/v1/ingredients`)
.then(res => res.json());

export const getAllIngredients = () => (
  { type: 'GET_ALL_INGREDIENTS', payload: fetchGetIngredients() }
);

// export const Get
