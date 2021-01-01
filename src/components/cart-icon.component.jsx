import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../src/redux/cart/cart-selectors';
import { toggleCartHidden } from '../../src/redux/cart/cart-actions';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);