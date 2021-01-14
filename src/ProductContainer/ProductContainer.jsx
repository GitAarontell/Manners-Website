import React from 'react';
import IndividualItem from '../item/IndividualItem'
import './styles.css'


class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.props.photos;
        this.classes = ['top', 'middle', 'end']
    }
    
    render() {
        const listItems = this.test.map((obj) => {
            if(obj.hasOwnProperty('array')) {
            return (
            <div className={this.classes[obj.array]} key={obj.key}>
                <IndividualItem object={obj}/>
            </div>
            );
            } else {return null;}
        });

        return (
            <div className='mainContainer'>
                
                
                <div className='title'>
                    <h1>{this.props.type}</h1>
                </div>

                <div className='container'>

                {listItems}

                </div>
                
            </div>
        );
    }
}

export default ProductContainer;