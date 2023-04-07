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
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-17l-3.431 14h-2.102l2.541-11h-16.812l4.615 13h13.239l3.474-14h2.178l.494-2h-4.196z"/></svg>
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