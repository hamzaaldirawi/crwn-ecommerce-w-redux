import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_2ajfaI9TlYHDc8akTv8Xtyqt';

    const onToken = token => {
        console.log(token);
        alert('payment done')
    }

    return(
        <StripeCheckout 
            label = 'Pay Now'
            name = 'Crwn'
            billingAddress
            shippingAddress
            image = '/images/crown.svg'
            description = {`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;