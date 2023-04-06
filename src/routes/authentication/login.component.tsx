import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPass
} from './../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

import FormInputField from '../../components/form-input-field/form-input-field.component';
import Button from '../../components/button/button.component';
import css from './authentication.module.css';

const defaultFormFields = {
  email: '',
  password: ''
};

export const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

const Login = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPass(email, password);
      setCurrentUser(user);
      resetFormFields()
    } catch (error: any) {

      switch(error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/user-not-found':
          alert("This user isn't registered");
          break;
        default:
          console.log(error);
      }

    }
  };

  return (
    <div className='auth-form-container'>
      <h1 className='page-heading'>Login</h1>

      <span className={css['subheading']}>Login with Google</span>
      
      <Button buttonType={'inverted'} onClick={logGoogleUser}>
        Log In with Google
      </Button>

      <span className={css['subheading']}>Or your e-mail and password</span>

      <form className={css['login-form']} onSubmit={handleSubmit}>

        <FormInputField 
          label='Email' 
          onChange={handleChange}
          type='email'
          required
          name='email'
          value={email}
        />

        <FormInputField 
          label='Password' 
          onChange={handleChange}
          type='password'
          required
          name='password'
          value={password}
        />

        <Button buttonType={'basic'} type="submit">Log In</Button>
      </form>

      <span className={css['subheading']}>New Customer?</span>
      <Link className='underlined-link-button' to='/sign-up'>CREATE AN ACCOUNT</Link>

    </div>
  );
};

export default Login;