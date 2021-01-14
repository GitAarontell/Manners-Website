import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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

                        <img className='storeImg' src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-shop-13.png" alt="store" />

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
                            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-shopping-cart-3.png" alt="shopping cart" />
                            {this.setCount(this.props.info.logTotal)}
                        </Link>
                    </div>

                    <div className='icon'>
                        <img onClick={this.handleClick} src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/240/iconmonstr-menu-6.png" alt="menu" />
                    </div>

                    <div className={[this.state.key, 'resize'].join(' ')}>
                        <h2 onClick={this.handleClick}> <Link to="/shirts">Shirts</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/pants">Pants</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/hats">Hats</Link> </h2>
                        <h2 onClick={this.handleClick}> <Link to="/briefs">Stylish Briefs</Link> </h2>
                        <img onClick={this.handleClick} src="https://cdns.iconmonstr.com/wp-content/assets/preview/2019/96/iconmonstr-door-8.png" alt="exit" />
                    </div>
                    <Link to='/cart'>
                        <div className='cartBreakout'>
                            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2013/96/iconmonstr-shopping-cart-3.png" alt="cart" />
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