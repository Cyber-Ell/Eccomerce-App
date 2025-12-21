import React from 'react'

const NewsLetter = () => {

     const onSubmitHandler = (e) => {
            e.preventDefault();
            // Add your form submission logic here
      }
  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20%</p>
      <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem non quas nesciunt magnam ad doloremque pariatur laboriosam
      </p>
      <form onSubmit={onSubmitHandler} className='my-6 flex gap-3 border border-gray-400 items-center sm:w-1/2 w-full m-auto pl-3'>
            <input type="email" className='w-full sm:flex-1 outline-none ' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetter