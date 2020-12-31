import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { multiDispatchRemove } from '../redux.js'
import './styles.css';

function CartItem(props) {

    let set = useSelector(state => state);
    let dispatch = useDispatch();

    return (
        <div className='cartItem'>
            <div className='topFile'>Ship To: </div>
            <div className='liner'>
                <div className='imageInformation'>
                    <img src={props.object.pic} alt="" />
                </div>

                <div className='characteristics flexCol'>
                    <h4>{props.object.name}</h4>
                    <h4>Size: {props.object.size}</h4>
                    <h4>Price: ${props.object.price}</h4>
                    <button onClick={() => dispatch(multiDispatchRemove(set, props.object))} >Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;