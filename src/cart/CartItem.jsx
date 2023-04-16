import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { multiDispatchRemove, multiDispatchDecreaseQuantity, multiDispatch, removeTotalItem } from '../redux.js'
import xMark from "../photos/x-mark.png"
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
                <img src={props.image} alt="" />
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
                <img onClick={() => dispatch(removeTotalItem(set, props.object, props.object.quantity))} src={xMark} alt="exit icon" />
            </div>

        </div>
    );
}



export default CartItem;