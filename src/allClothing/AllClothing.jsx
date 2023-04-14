import React from 'react'
import IndividualItem from '../item/IndividualItem'
import './styles.css'


function AllClothing(props) {


    const Items = props.photos.map((obj) => {
        
        return (
            <div className='eachItem' key={obj.key}>
                <IndividualItem id={obj.id} image={props.images[obj.idx]} name={obj.name} price={obj.price} object={obj}/>                   
            </div>
        );
        
    });

    return (
        <div className='container-a'>
            <h1>{props.type}</h1>
            <div className='allContainer'>
                {Items}
            </div>
        </div>
    );
}

export default AllClothing; 