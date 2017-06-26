//response reducer.

const auth = (state = { client: {} }, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
        console.log('REGISTER_PENDING');
            return { ...state, isFetching: true };
        case 'REGISTER_FULFILLED':
        console.log('REGISTER_FULFILLED');
            console.log(action.payload);
            return { ...state, client: action.payload, isFetching: false };
        case 'REGISTER_REJECTED':
        console.log('REGISTER_REJECTED');
            return { ...state, isFetching: false };

        case 'LOGIN_PENDING':
        console.log('LOGIN_PENDING');
            return { ...state, isFetching: true };
        case 'LOGIN_FULFILLED':
        console.log('LOGIN_FULFILLED');
            console.log(action.payload);
            return { ...state, client: action.payload, isFetching: false };
        case 'LOGIN_REJECTED':
        console.log('LOGIN_REJECTED');
            return { ...state, isFetching: false };
        default:
            return state;
    }
}

export default auth;
