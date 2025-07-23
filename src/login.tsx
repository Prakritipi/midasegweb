import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../src/Components/auth/AuthProvider';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState("Bret");
    const [password, setPassword] = useState("Leanne Graham");
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        const success = await login(username, password);
        if (success) {
            setMessage("✅ Logged in successfully!");
            navigate('/dashboard');
        } else {
            setMessage("❌ Invalid username or password.");
        }
    };

    return (
        <div className='flex flex-col md:flex-row h-screen w-full login-page'>
            {/* Left side */}
            <div className='w-full md:w-[30%] bg-gradient-to-tl from-[#1f2a79] to-[#0f1b4a] text-white flex flex-col justify-between p-6'>
                <div className='logo'>
                    <img src='./toplogo.png' alt='MIDAS Logo' className="w-[130px]" />
                </div>
                <div className='footer-text text-left w-full'>
                    <h3>Check The Status</h3>
                    <p>MID DR. HOMS VS V5.1.2.5</p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-[50%] flex justify-center items-center bg-white px-4 md:px-0">
                <div className="w-full max-w-[400px] text-center">
                    <div className='mb-5'>
                        <img className='w-[150px] mx-auto mb-5' src='/MHSDark.png' alt='MIDAS Form Logo' />
                    </div>
                    <h2 className="text-xl font-semibold">Welcome back</h2>
                    <p className="text-sm text-gray-600">Enter your username and password to sign in</p>

                    <div className="flex flex-col items-center gap-2 my-4 w-full">
                        <input
                            type='text'
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username (e.g. Bret)"
                        />
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password (e.g. Leanne Graham)"
                        />
                        {message && (
                            <p className='text-sm text-center mt-2'>
                                {message}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full px-4 py-2 bg-[#1fb5a6] text-white rounded-md hover:bg-[#17a497] transition duration-200">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;