// Components/Login.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // (Optional) Validate credentials here before navigating
        navigate('/dashboard');
    };

    return (
        <div className='flex flex-col md:flex-row h-screen w-full login-page'>
            {/*left side*/}
            <div className='w-full md:w-[30%] bg-gradient-to-tl from-[#1f2a79] to-[#0f1b4a] text-white flex flex-col justify-between p-6'>
                <div className='logo'>
                    <img src='toplogo.png' alt='MIDAS Logo' className="w-[130px]" />
                </div>
                <div className='footer-text text-left w-full'>
                    <h3>Check The Status</h3>
                    <p>MID DR. HOMS VS V5.1.2.5</p>
                </div>
            </div>

            {/*Right side*/}
            <div className="w-full md:w-[50%] flex justify-center items-center bg-white px-4 md:px-0">
                <div className="w-full max-w-[400px] text-center">
                    <div className='mb-5'>
                        <img className='w-[150px] mx-auto mb-5' src='/MHSDark.png' alt='MIDAS Form Logo' />
                    </div>
                    <h2 className="text-xl font-semibold">Welcome back</h2>
                    <p className="text-sm text-gray-600">Enter your username and password to sign in</p>

                    <div className="flex flex-col items-center gap-2 my-4 w-full">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <button onClick={handleLogin}
                        className="w-full px-4 py-2 bg-[#1fb5a6] text-white rounded-md hover:bg-[#17a497] transition duration-200">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
