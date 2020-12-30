import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
 
const Header = ({currentUser, hidden}) => (
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
   currentUser,
   hidden
})

export default connect(mapStateToProps)(Header);

