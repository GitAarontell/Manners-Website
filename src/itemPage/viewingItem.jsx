import React from 'react'
import './styles.css'
import morePhotos from '../moreData'
import {multiDispatch} from '../redux.js'
import {connect} from 'react-redux'


class ViewingItem extends React.Component {

    constructor(props){
        super(props);
        this.array = ['','selected',''];
        this.addSize = this.addSize.bind(this);
        this.state={
            clothing: 'shirt',
            loadImage: null,
            name: null,
            price: null,
            type: null,
            size: 'Medium'
        }
    }

    addSize = (e)=> {
        let arr = new Array(3).fill('');
        let id = e.target.id;
        this.array = arr;
        this.array[id] = 'selected';
        
        if(id > 0){
            (id > 1) ? this.setState({size: 'Large'}) : this.setState({size: 'Medium'});
        } else {
            this.setState({size: 'Small'});
        }
        console.log(e.target);
    }

    componentWillMount() {
        let all = Object.values(morePhotos);
        let id = parseInt(this.props.match.params.id);

        all.map((a) => {
            a.find((b)=> {
                if(b.id === id){
                    this.setState({
                        loadImage: b.clothing,
                        name: b.name,
                        price: b.price,
                        type: b.type
                    });                    
                } 
                return null;
            });
            return null;
        });     
    } 

    render() {
        

        return (
            <div className='holder'>

                <img className='image' src={this.state.loadImage} alt="empty" />

                <div className='description'>
                    <div className='title2'>
                        <p style={{ textAlign: "left" }}>{this.state.name}</p>
                        <p style={{ textAlign: 'right' }}>${this.state.price}</p>
                    </div>

                    <div className='para'>
                        <p>The classic crew meets the Elongated Cut for a seriously sophisticated look. It combines the reliability of your go-to closet staples with an extended elongated bottom hem that deomonstrates true class with an urban feel.</p>
                    </div>

                    <div className='size'>
                        <h2 id={0} className={this.array[0]} onClick={this.addSize}>S</h2>
                        <h2 id={1} className={this.array[1]} onClick={this.addSize}>M</h2>
                        <h2 id={2} className={`border ${this.array[2]}`} onClick={this.addSize}>L</h2>
                    </div>

                    <div className='addButton'>
                        <button onClick={() => this.props.dispatch(multiDispatch(this.state.type, this.state.name, this.state.size, this.state.loadImage, this.state.price))}>Add To Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(ViewingItem);

