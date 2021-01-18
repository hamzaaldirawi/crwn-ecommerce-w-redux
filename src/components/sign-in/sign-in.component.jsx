import { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'; 

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
      });

    const { email, password } = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);

    }

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value})
    }

   
    return(
        <SignInContainer>
            <SignInTitle>I already had an account</SignInTitle>  
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    label='Email'
                    value={email}
                    required />

                <FormInput 
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    label='Password'
                    value={password} 
                    required />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn >Sign in with google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);