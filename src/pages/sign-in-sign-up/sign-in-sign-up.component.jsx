import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-sign-up.styles.scss';

const SignInSignOut = () => (
    <div className = 'sign-in-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignOut;