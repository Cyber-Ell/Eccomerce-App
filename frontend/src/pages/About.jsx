import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetter'

const About = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-16 py-8'>
      {/* Page Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section with Image */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img 
          src={assets.about_img} 
          alt="About Us" 
          className='w-full md:max-w-[450px] rounded-lg shadow-md'
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Forever, where passion meets fashion. We started with a simple vision: to create a shopping experience that combines quality, style, and affordability. Our journey began with a commitment to bringing you the latest trends and timeless classics that make you feel confident and comfortable.
          </p>
          <p>
            At Forever, we believe that fashion is more than just clothing—it's a form of self-expression. That's why we carefully curate our collections to offer you diverse styles that suit every occasion, personality, and preference. From casual everyday wear to elegant evening pieces, we've got you covered.
          </p>
          <b className='text-gray-800 text-lg'>Our Mission</b>
          <p>
            Our mission is to empower individuals through fashion by providing high-quality, stylish, and affordable clothing that inspires confidence. We're committed to sustainable practices, ethical sourcing, and exceptional customer service that makes shopping with us a pleasure.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4 mt-20'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow'>
          <b className='text-lg'>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards. Your satisfaction is our priority, and we stand behind every item we sell.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow'>
          <b className='text-lg'>Convenience:</b>
          <p className='text-gray-600'>
            Shop from the comfort of your home with our intuitive website and seamless checkout process. We offer multiple payment options and fast, reliable shipping to make your experience effortless.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-lg transition-shadow'>
          <b className='text-lg'>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated customer service team is here to assist you with any questions or concerns. We're committed to providing prompt, friendly support to ensure your shopping experience is nothing short of excellent.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  )
}

export default About