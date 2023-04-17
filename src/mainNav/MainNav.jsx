import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cart from '../photos/cart.png'
import menu from '../photos/menu.png'
import exitDoor from '../photos/exitDoor.png'
import './styles.css'

class MainNav extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            nameOne: 'menu',
            nameTwo: 'off',
            check: true,
            key: 'off'
        }
        this.setCount = this.setCount.bind(this);
    }


    setCount = (count) => {
        if (count > 0) {
            return (
                <div className='circle'>
                    <p>{this.props.info.logTotal}</p>
                </div>
            );
        } else {
            return (null);
        }
    }

    handleClick() {
        if (this.state.check) {
            this.setState({
                check: false,
                key: this.state.nameOne
            });

        } else {
            this.setState({
                check: true,
                key: this.state.nameTwo
            });
        }

    }

    render() {

        return (
            <div className='totalNav'>
                <div className='spacer'></div>

                <div className='navBar grid'>
                    <div className='home grid'>

                        <svg className='storeImg' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z"/></svg>
                        <div className='storeTitle'>
                            <Link to='/'>Manners</Link>
                        </div>

                    </div>

                    <div className='subNav grid'>
                        <div className='shirts'> <Link to="/shirts">Shirts</Link> </div>
                        <div className='pants'> <Link to="/pants">Pants</Link> </div>
                        <div className='hats'> <Link to="/hats">Hats</Link> </div>
                        <div className='briefs'> <Link to="/briefs">Stylish Briefs</Link> </div>
                    </div>


                    <div className='cart grid'>
                        <Link className='cartImg' to='/cart'>
                            <img src={cart} alt="cart" />
                            {this.setCount(this.props.info.logTotal)}
                        </Link>
                    </div>

                    <div className='icon'>
                        <img onClick={this.handleClick} src={menu} alt="menu" />
                    </div>

                    <div className={[this.state.key, 'resize'].join(' ')}>
                        <h2 onClick={this.handleClick}> <Link to="/shirts">Shirts</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/pants">Pants</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/hats">Hats</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/briefs">Stylish Briefs</Link> </h2>
                        <img onClick={this.handleClick} src={exitDoor} alt="exit" />
                    </div>
                    <Link to='/cart'>
                        <div className='cartBreakout'>
                            <img src={cart} alt="cart" />
                            {this.setCount(this.props.info.logTotal)}
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { info: state }
}

export default connect(mapStateToProps)(MainNav);