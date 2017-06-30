//response reducer.
const INITIAL_STATE = { client: {}, fetching: false};

const client = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_CLIENT_PENDING':
        console.log('GET_CLIENT_PENDING');
            return { ...state, isFetching: true };

        case 'GET_CLIENT_FULFILLED':
        console.log('GET_CLIENT_FULFILLED');
            console.log(action.payload);
            return { ...state, client: action.payload, isFetching: false };

        case 'GET_CLIENT_REJECTED':
        console.log('GET_CLIENT_REJECTED');
            return { ...state, isFetching: false };

        default:
            return state;
    }
}

export default client;
