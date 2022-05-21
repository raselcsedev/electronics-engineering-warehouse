import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import google from '../../../images/social/google.png';

const Register = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
      
    const navigate = useNavigate();
    let signInError;

    if (loading || gLoading ) {
        return <Loading></Loading>
    };
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const navigateLogin = e =>{
        navigate('/login');
    }

    if(user || gUser){
        navigate('/home');
    }

    const handleRegister =async e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
        alert('Updated profile');
      navigate('/home');

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-info mt-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                    <Form.Control type="email" name='email' placeholder="Enter email"  />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Register
                </Button>
            </Form>
            {signInError}
            <p>Already have an account ? <Link to='/login' className='text-danger w-25 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default Register;