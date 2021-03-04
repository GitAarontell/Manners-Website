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
            case 'RemoveAll':
                return state - action.payload;
            default:
                return state;
        }
    }
}

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


export function add(name, size, pic, price, state) {
    let check = true;

    if (state.logCart.size !== 0) {
        state.logCart.map((obj) => {
            if ((obj.size === size) && (obj.name === name)) {
                check = false;
                obj.quantity++;
            }
            return null;
        });
    }

    if (check) {
        return {
            type: 'Add',
            payload: {
                name: name,
                size: size,
                pic: pic,
                price: price,
                quantity: 1
            }
        }
    } else {
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

export let multiDispatch = (info, name, size, pic, price, state) => {
    return function (dispatch) {
        dispatch({
            type: 'Increment_'
        })

        dispatch({
            type: 'Increment_' + info
        })

        dispatch(
            add(name, size, pic, price, state)
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