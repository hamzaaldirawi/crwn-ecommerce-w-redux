import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_2ajfaI9TlYHDc8akTv8Xtyqt';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }   
        })
        .then(response => {
            alert('payment successful')
        })
        .catch(error => {
            console.log('Payment error', error);
            alert('There was an error with your payment, please make sure you use the provided card')
        })
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