import { signInWithGooglePopup, createUserDocumentFromAuth } from './../../utils/firebase/firebase.utils';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
    </>
  );
};

export default Login;