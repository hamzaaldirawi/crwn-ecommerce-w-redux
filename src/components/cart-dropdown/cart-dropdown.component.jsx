import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item = {cartItem} />

                ))
                :
                <span className = 'empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHEKCOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// When you write connect mapstatetoprops it already connect 
// mapdispatch to component, so if we need dispatch for 1 only 
// props we don't have to write it, instead of writing it
// we can just bring it to object in function 
export default withRouter(connect(mapStateToProps)(CartDropDown));