import React, { useContext, useState } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  const { navigate, getCartAmount } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your order submission logic here
    // navigate('/orders');
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-8 lg:px-16'>
      {/* Left side - Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className="flex gap-3">
          <input 
            required
            onChange={onChangeHandler}
            name='firstName'
            value={formData.firstName}
            type="text" 
            placeholder='First name' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
          <input 
            required
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            type="text" 
            placeholder='Last name' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
        </div>

        <input 
          required
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          type="email" 
          placeholder='Email address' 
          className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
        />

        <input 
          required
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          type="text" 
          placeholder='Street' 
          className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
        />

        <div className="flex gap-3">
          <input 
            required
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            type="text" 
            placeholder='City' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
          <input 
            required
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            type="text" 
            placeholder='State' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
        </div>

        <div className="flex gap-3">
          <input 
            required
            onChange={onChangeHandler}
            name='zipcode'
            value={formData.zipcode}
            type="number" 
            placeholder='Zipcode' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
          <input 
            required
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            type="text" 
            placeholder='Country' 
            className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
          />
        </div>

        <input 
          required
          onChange={onChangeHandler}
          name='phone'
          value={formData.phone}
          type="number" 
          placeholder='Phone' 
          className='border border-gray-300 rounded py-2 px-3.5 w-full focus:outline-none focus:border-gray-500'
        />
      </div>

      {/* Right side - Cart Total and Payment */}
      <div className="mt-8 sm:mt-0 w-full sm:max-w-[480px]">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          
          <div className="flex flex-col lg:flex-row gap-3 mt-5">
            <div 
              onClick={() => setMethod('stripe')} 
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer transition-all ${method === 'stripe' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
            >
              <div className={`min-w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></div>
              <img src={assets.stripe_logo} alt="Stripe" className='h-5 mx-4' />
            </div>

            <div 
              onClick={() => setMethod('razorpay')} 
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer transition-all ${method === 'razorpay' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
            >
              <div className={`min-w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></div>
              <img src={assets.razorpay_logo} alt="Razorpay" className='h-5 mx-4' />
            </div>

            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer transition-all ${method === 'cod' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
            >
              <div className={`min-w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></div>
              <p className='text-gray-700 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button 
              type='submit'
              className='bg-black text-white px-16 py-3 text-sm uppercase hover:bg-gray-800 transition-colors'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder