import React from 'react'
import './styles.css'
import morePhotos from '../moreData'
import {multiDispatch} from '../redux.js'
import {connect} from 'react-redux'
import {whiteShirt, blackShirt, greyShirt, tanShirt, 
    bluePants, blackPants, tanPants, blackHat, redHat, blueHat, darkBriefs, pladBriefs, lightBriefs} from '../imageExports'


class ViewingItem extends React.Component {

    constructor(props){
        super(props);
        this.set = this.props.state;
        this.array = ['','selected',''];
        this.addSize = this.addSize.bind(this);
        this.state={
            clothing: 'shirt',
            loadImage: null,
            name: null,
            price: null,
            type: null,
            size: 'Med',
            idx: 0
        }
        this.images = [whiteShirt, blackShirt, greyShirt, tanShirt, 
            bluePants, blackPants, tanPants, blackHat, redHat, blueHat, darkBriefs, pladBriefs, lightBriefs];
    }
    
    addSize = (e)=> {
        let arr = new Array(3).fill('');
        let id = e.target.id;
        this.array = arr;
        this.array[id] = 'selected';
        
        if(id > 0){
            (id > 1) ? this.setState({size: 'Large'}) : this.setState({size: 'Med'});
        } else {
            this.setState({size: 'Small'});
        }
        // console.log(e.target);
    }

    componentWillMount() {
        // 10-12 briefs
        let all = Object.values(morePhotos);
        // so this gets us the 
        let id = parseInt(this.props.match.params.id);

        // looking in moreData and trying to find the correct clothing by matching id
        all.map((a) => {
            a.find((b)=> {
                if(b.id === id){
                    this.setState({
                        loadImage: this.images[b.id].default,
                        name: b.name,
                        price: b.price,
                        type: b.type,
                        idx: b.id
                    });                    
                } 
                return null;
            });
            return null;
        });     
    } 

    render() {
        //console.log(this.props);
        //console.log(this.props.state);
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
                        <button onClick={() => this.props.dispatch(multiDispatch(this.state.type, this.state.name, this.state.size, this.state.loadImage, this.state.price, this.state.idx, this.props.state))}>Add To Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewingItem);

