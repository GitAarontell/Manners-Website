import { combineReducers } from 'redux';

//onClick={() => dispatch(multiDispatch(props.object.type))}
// this creates and sets the reducers, whcih are the actions that can change the state, for the logTotal state and the logCart state
// the logShirts state is just for a past example
export const allReducers = combineReducers({
    logTotal: createReducer(),
    logShirts: createReducer('shirt'), // left this for future example of what I was doing, but has no purpose in the real application
    logCart: reducer
});

// so the logTotal state has a state of 0, and action types increment, decrement, and remove all
function createReducer(name = '') {
    return function (state = 0, action) {
        switch (action.type) {
            case 'Increment_' + name:
                return state + 1;
            case 'Decrement_' + name:
                return state - 1;
            case 'RemoveAll':
                return state - action.payload;
            default:
                return state;
        }
    }
}

// the logCart state has an initial state of an empty array and the actions add, remove, increase quantity, and decrease quantity
function reducer(state = [], action) {
    switch (action.type) {
        case 'Add':
            return state.concat([action.payload]);
        case 'Remove':
            return state = action.payload;
        case 'IncreaseQuantity':
            return state = action.payload;
        case 'DecreaseQuantity':
            return state = action.payload;
        default:
            return state;
    }
}

// this is the add function that adds an object with all these parameters to the logCart state
export function add(name, size, pic, price, idx, state) {
    let check = true;
    // so this first checks to see if the same item is already in the logCart, if it is then just increase the quantity
    if (state.logCart.size !== 0) {
        state.logCart.map((obj) => {
            if ((obj.size === size) && (obj.name === name)) {
                check = false;
                obj.quantity++;
            }
            return null;
        });
    }
    // if the item is not in the logCart then we add the item with these parameters in the cart
    if (check) {
        return {
            type: 'Add',
            payload: {
                name: name,
                size: size,
                pic: pic,
                price: price,
                quantity: 1,
                idx: idx
            }
        }
    } else { // if the item was already in the cart then increase quantity of the logTotal state as well
        return {
            type: 'IncreaseQuantity',
            payload: state.logCart
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

    return array;
}

function DecreaseQuantity(state, object) {

    state.logCart.map((obj) => {
        if (obj === object) {
            obj.quantity--;
        }

        return null;
    });

    return ({
        type: 'DecreaseQuantity',
        payload: state.logCart
    });
}
// this multiDispatch runs the increment, increment info and add functions all at the same time
export let multiDispatch = (info, name, size, pic, price, state, idx) => {
    return function (dispatch) {
        dispatch({
            type: 'Increment_'
        })

        dispatch({
            type: 'Increment_' + info
        })

        dispatch(
            add(name, size, pic, price, state, idx)
        )
    }
}

export let multiDispatchRemove = (state, object) => {
    return function (dispatch) {
        dispatch({
            type: 'Decrement_'
        })

        dispatch(
            remove(state, object)
        )
    }
}

export let removeTotalItem = (state, object, num) => {

    return function (dispatch) {
        dispatch({
            type: 'RemoveAll',
            payload: num
        })

        dispatch(
            remove(state, object)
        )
    }
}

export let multiDispatchDecreaseQuantity = (state, object) => {
    return function (dispatch) {
        dispatch({
            type: 'Decrement_'
        })

        dispatch(
            DecreaseQuantity(state, object)
        )
    }

}