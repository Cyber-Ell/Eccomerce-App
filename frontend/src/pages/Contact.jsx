import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetter'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    // Add your form submission logic here (e.g., send to backend or email service)
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <div className='px-4 sm:px-8 lg:px-16 py-8'>
      {/* Page Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28'>
        {/* Contact Image and Info */}
        <div className='flex-1'>
          <img 
            src={assets.contact_img} 
            alt="Contact Us" 
            className='w-full md:max-w-[480px] rounded-lg shadow-md'
          />
          
          <div className='mt-8 space-y-6'>
            <div>
              <p className='font-semibold text-xl text-gray-800 mb-2'>Our Store</p>
              <p className='text-gray-600'>54709 Willms Station<br />Suite 350, Washington, USA</p>
            </div>

            <div>
              <p className='font-semibold text-xl text-gray-800 mb-2'>Get In Touch</p>
              <p className='text-gray-600'>
                Tel: (415) 555-0132<br />
                Email: admin@forever.com
              </p>
            </div>

            <div>
              <p className='font-semibold text-xl text-gray-800 mb-2'>Careers at Forever</p>
              <p className='text-gray-600'>
                Learn more about our teams and job openings.
              </p>
              <button className='border border-black px-8 py-3 text-sm mt-4 hover:bg-black hover:text-white transition-all duration-300'>
                Explore Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='flex-1'>
          <form onSubmit={onSubmitHandler} className='space-y-4'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>
                Your Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChangeHandler}
                placeholder='Enter your name'
                className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
              />
            </div>

            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                Your Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                placeholder='Enter your email'
                className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
              />
            </div>

            <div>
              <label htmlFor="subject" className='block text-sm font-medium text-gray-700 mb-2'>
                Subject
              </label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={onChangeHandler}
                placeholder='Enter subject'
                className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors'
              />
            </div>

            <div>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-2'>
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={onChangeHandler}
                placeholder='Write your message here...'
                rows="6"
                className='w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-800 transition-colors resize-none'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white py-3 rounded hover:bg-gray-800 active:bg-gray-900 transition-colors font-medium'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  )
}

export default Contact