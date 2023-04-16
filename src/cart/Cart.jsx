import React from 'react'
import { useSelector, connect } from 'react-redux'
import CartItem from './CartItem'
import './styles.css'
import {whiteShirt, blackShirt, greyShirt, tanShirt, 
    bluePants, blackPants, tanPants, blackHat, redHat, blueHat, darkBriefs, pladBriefs, lightBriefs} from '../imageExports'

function Cart(props) {
    let images = [whiteShirt, blackShirt, greyShirt, tanShirt, 
        bluePants, blackPants, tanPants, blackHat, redHat, blueHat, darkBriefs, pladBriefs, lightBriefs];
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
        console.log(obj);
        return (
            <CartItem object={obj} image={images[obj.idx].default} key={i++} />
        );
    });

    return (
        <div className='container-z'>
        <div className='container-c'>
            <div className='container-d'>
                <h3>Product</h3>
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
        </div>
    );
}

function mapStateToProps(state) {
    return { logCart: state.logCart };
}

export default connect(mapStateToProps)(Cart);
