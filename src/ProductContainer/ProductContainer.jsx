import React from 'react';
import IndividualItem from '../item/IndividualItem'
import './styles.css'


class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.props.photos;
        this.classes = ['top', 'middle', 'end']
        // array of images
        this.images = this.props.images;
    }
    
    render() {

        // this.test is one of the arrays of objects from moreData.js
        const listItems = this.test.map((obj) => {
            // so if there is an array property in that array then we continue else we skip
            // because I had 4 shirts but 3 of everything else, so I wanted to only display 3 per row in main menu
            // so last shirt does not have the array property
            if(obj.hasOwnProperty('array')) {
            return (
                // so the class is going to be either top middle or end depending on the obj.array number value which is used
                // as an index for the classes array
                // For individual item we pass in the whole array as object
                <div className={this.classes[obj.array]} key={obj.key}>
                    <IndividualItem object={obj} image={this.images[obj.array]}/>
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