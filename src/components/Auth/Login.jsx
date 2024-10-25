import React, { useState } from 'react';

function Login({ handleLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className='flex h-screen w-screen items-center justify-center'>

                <div className='border-2 rounded-xl border-emerald-600 p-20'>

                    <form className='flex flex-col items-center justify-center' onSubmit={(e) => {
                        submitHandler(e);
                    }}>

                        <input required className=' text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                        <input required className=' text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-5' type="password" placeholder='Enter password' value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />

                        <button className=' text-white outline-none bg-emerald-600 border-2 border-white-600 rounded-full text-xl py-3 px-5 mt-5'>LogIn</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;