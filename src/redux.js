import { combineReducers } from 'redux';

//onClick={() => dispatch(multiDispatch(props.object.type))}
export const allReducers = combineReducers({
    logTotal: createReducer(),
    logShirts: createReducer('shirt'), // left this for future example of what I was doing, but has no purpose in the real application
    logCart: reducer
});


function createReducer(name = '') {
    return function (state = 0, action) {
        switch (action.type) {
            case 'Increment_' + name:
                return state + 1;
            case 'Decrement_' + name:
                return state - 1;
            default:
                return state;
        }
    }
}

export function reducer(state = [], action) {
    switch (action.type) {
        case 'Add':
            return state.concat([action.payload]);
        case 'Remove':
            return state = action.payload;
        default:
            return state;
    }
}

export function add(name, size, pic, price) {
    return {
        type: 'Add',
        payload: {
            name: name,
            size: size,
            pic: pic,
            price: price
        }
    }
}

function remove(state, object) {
    return {
        type: 'Remove',
        payload: deleter(state, object)
    }
}

function deleter(state, object) {
    let i = 0;
    let cart = state.logCart;
    let array = null;

    cart.map((obj) => {
        if (obj === object) {
            array = cart.slice(0, i).concat(cart.slice(i + 1, cart.length));
        }
        i++;
        return null;
    });
    console.log('This is array: '+ array);
    return array;
}

export let multiDispatch = (info, name, size, pic, price) => {
    return function (dispatch) {
        dispatch({
            type: 'Increment_'
        })

        dispatch({
            type: 'Increment_' + info
        })

        dispatch(
            add(name, size, pic, price)
        )
    }
}

export let multiDispatchRemove = (state, object) => {
    return function (dispatch) {
        dispatch({
            type: 'Decrement_'
        })

        dispatch(
            remove(state,object)
        )
    }
}