import { CustomButtonContainer } from './custom-button.styles'; 

const CustomButton = ({children, ...props}) => (
<CustomButtonContainer {...props}>
{children}
</CustomButtonContainer>
)

/*
Before using styled component 
import './custom-button.styles.scss';

const CustomButton = ({ children,
                        isGoogleSignIn,
                        inverted,
                        ...otherProps }) => (
    <button className = {`${inverted ? 'inverted' : ''}
                          ${isGoogleSignIn ? 'google-sign-in' : ''}
                          custom-button`} 
                          {...otherProps}
    >
        {children}
    </button>
)
*/
export default CustomButton;