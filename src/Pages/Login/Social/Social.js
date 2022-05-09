import React from 'react';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorShow;
    if (error) {
        errorShow = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

 

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            {errorShow}
        </div>
    );
};

export default Social;