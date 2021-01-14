import React from 'react'
import { useSelector, connect } from 'react-redux'
import CartItem from './CartItem'
import './styles.css'

function Cart(props) {
    let i = 0;
    let set = useSelector(state => state);

    let totalCost = () => {
        let cost = 0;
        set.logCart.map((obj) => {
            cost += obj.price * obj.quantity;
            return null;
        });
        return cost;
    }

    let totalCart = props.logCart.map((obj) => {

        return (
            <CartItem object={obj} key={i++} />
        );
    });

    return (
        <div className='container-c'>
            <div className='container-d'>
                <h3 style={{ fontSize: "25px" }}>Product</h3>
                <h3>Size</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
            </div>
            {set.logTotal > 0 &&
                <div className='totalCart-a'>
                    {totalCart}
                    <h3>Total: ${totalCost()}</h3>
                </div>
            }
        </div>
    );
}

function mapStateToProps (state) {
    return {logCart: state.logCart};
}

export default connect(mapStateToProps)(Cart);
