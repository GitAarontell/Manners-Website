import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './styles.css'

function Cart() {
    let i = 0;
    let set = useSelector(state => state);

    let totalCost = () => {
        let cost = 0;
        set.logCart.map((obj) => {
            cost += obj.price;
            return null;
        });
        return cost;
    }

    let totalCart = set.logCart.map((obj) => {

        return (
            <CartItem object={obj} key={i++} />
        );
    });


    return (
        <div className='container-c flexCol'>
            <h1>Cart</h1>
            {set.logTotal > 0 &&
                <div className='totalCart-a'>
                    {totalCart}
                    <h3>Total: ${totalCost()}</h3>
                </div>
            }
        </div>
    );
}

export default Cart;