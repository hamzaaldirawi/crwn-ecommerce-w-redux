import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
 
const Header = ({ currentUser, hidden}) => (
    <div className = 'header'>
        <Link to = '/' className = 'logo-container'>
             <Logo className = 'logo'></Logo>
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>SHOP</Link>
            <Link className = 'option' to = '/shop'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option display-name' onClick={() => auth.signOut()}>{currentUser.displayName}</div>
                :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>
);
/*
const mapStateToProps = (state) => ({
   currentUser: selectCurrentUser(state),
   hidden: selectCartHidden(state)
})
*/ // => 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
 })

export default connect(mapStateToProps)(Header);

