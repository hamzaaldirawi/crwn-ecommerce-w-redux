import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick = {toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);