import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      if (currentState === 'Sign Up') {
        console.log('Sign Up:', formData);
        // Add your sign up API call here
      } else {
        console.log('Login:', { email: formData.email, password: formData.password });
        // Add your login API call here
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-8'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-full sm:max-w-md gap-4 text-gray-800 bg-white p-8 rounded-lg shadow-lg border'>
        <div className='inline-flex items-center gap-2 mb-2 mt-4'>
          <p className='text-3xl font-semibold'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>

        {currentState === 'Sign Up' && (
          <input
            required
            onChange={onChangeHandler}
            name='name'
            value={formData.name}
            type="text"
            placeholder='Name'
            className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
          />
        )}

        <input
          required
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          type="email"
          placeholder='Email'
          className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
        />

        <input
          required
          onChange={onChangeHandler}
          name='password'
          value={formData.password}
          type="password"
          placeholder='Password'
          className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
        />

        <div className='w-full flex justify-between text-sm mt-2'>
          <p className='cursor-pointer hover:underline'>Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:underline font-medium'>
              Create account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:underline font-medium'>
              Login Here
            </p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-black text-white py-3 mt-4 rounded hover:bg-gray-800 active:bg-gray-900 transition-colors font-medium'
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {currentState === 'Sign Up' && (
          <div className='flex items-start gap-2 mt-2 w-full text-xs text-gray-600'>
            <input type="checkbox" required className='mt-0.5' />
            <p>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}

export default Login