
import {
    signinwithGooglePopup, createUserDocumentFromAuth, signinwithGoogleRedirect
} from '../../utils/firebase/firebase.utils';
import { async } from '@firebase/util';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signinwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return (
        <div>
            <h1> Sign In Page </h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    );
}
export default SignIn;