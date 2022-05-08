import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Social from '../Social/Social';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const navigateLogin = e =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
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
            <p>Already have an account ? <Link to='/login' className='text-danger w-25 pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;