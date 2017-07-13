import { API_URL } from '../config/api';

export const getIngredients = () => {
    return { type: 'GET_INGREDIENTS', payload: fetchGetIngredients() };
};

export const fetchGetIngredients = () => fetch(`${API_URL}/api/v1/ingredients`).then(res => res.json())
.then(res => console.log('this is the res', res));
