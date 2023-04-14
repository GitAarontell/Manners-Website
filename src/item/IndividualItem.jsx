import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { multiDispatch } from '../redux.js';
import './styles.css';



function IndividualItem(props) {
    let set = useSelector(state => state);
    let dispatch = useDispatch();
    let [size, setSize] = useState('Med');
    let [array, setArray] = useState(['','selected','']);

    let click = (e) => {
        let arr = ['','',''];
        setArray(array = arr);
        array[e.target.id] = 'selected'; // using setArray hook didn't work properly, big issue
        
        if (e.target.id > 0) {
            (e.target.id) > 1 ? setSize(size = 'Large') : setSize(size = 'Med')
        } else {
            setSize(size = 'Small');
        }
    }
    // used to be <img src={props.object.clothing} alt="black T shirt" />
    // so, props image was returning an object module, when I logged it to console, it showed that the image was actually in 
    // and object called default so that is what this img src is.
    return (
        <div className='portrait'>
            
            <div className='picture'>
                <Link to={'/' + props.object.id}>
                    <img src={props.image.default} alt={props.object.name} />
                </Link>
            </div>

            <Link to={'/' + props.object.id}>
                <div className='clothingInfo'>
                    <p>{props.object.name}</p>
                    <p>${props.object.price}</p>
                </div>
            </Link>

            <div className='molder'>
                <button className='adder' onClick={() => dispatch(multiDispatch(props.object.type, props.object.name, size, props.object.clothing, props.object.price, set))}>Add To Cart</button>
            </div>

            <div className='sizes-a'>
                    <h2 id={0} className={array[0]} onClick={click}>S</h2>
                    <h2 id={1} className={array[1]} onClick={click}>M</h2>
                    <h2 id={2} className={array[2]} onClick={click}>L</h2>                    
            </div>

        </div>
    );
}

export default IndividualItem;