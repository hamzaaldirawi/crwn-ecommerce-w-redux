import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, /*OptionDiv*/ } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
 
const Header = ({ currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to = '/'>
             <Logo className = 'logo'></Logo>
        </LogoContainer>
        <OptionsContainer className = 'options'>
            <OptionLink to = '/shop'>SHOP</OptionLink>
            <OptionLink to = '/shop'>CONTACT</OptionLink>
            {
                currentUser ? 
                <OptionLink as = 'div' onClick={() => auth.signOut()}>{currentUser.displayName}</OptionLink>
                // We used OptionLink as div instead of importing css in styles jsx to reduce our code
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropDown />
        }
    </HeaderContainer>
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

