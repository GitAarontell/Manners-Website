import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { multiDispatchRemove, multiDispatchDecreaseQuantity, multiDispatch } from '../redux.js'
import './styles.css';

function CartItem(props) {

    let set = useSelector(state => state);
    let dispatch = useDispatch();

    function handleClick(state, object) {
        if (props.object.quantity === 1) {
            dispatch(multiDispatchRemove(state, object));
        } else {
            dispatch(multiDispatchDecreaseQuantity(state, object));
        }

    }

    return (
        <div className='cartItem'>
            <div style={{ width: "80px" }} className='imageInformation'>
                <img src={props.object.pic} alt="" />
                <p style={{ fontSize: "15px" }}>{props.object.name}</p>
            </div>
            <p style={{ width: "35px" }} >{props.object.size}</p>

            <div style={{ width: "80px" }}>
                <button onClick={() => handleClick(set, props.object)}>
                    -
                </button>
                {props.object.quantity}
                <button
                    onClick={() => dispatch(multiDispatch(props.object.type, props.object.name, props.object.size, props.object.clothing, props.object.price, set))}>
                    +
                </button>
            </div>

            <div style={{ width: "45px" }}>${props.object.price * props.object.quantity}</div>

            <div className='characteristics'>
                <img onClick={() => dispatch(multiDispatchRemove(set, props.object))} src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/96/iconmonstr-x-mark-thin.png" alt="exit icon" />
            </div>

        </div>
    );
}



export default CartItem;