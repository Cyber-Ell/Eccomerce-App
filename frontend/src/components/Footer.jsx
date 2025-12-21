import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  items-start mt-40 text-sm">
            <div className="">
                  <img src={assets.logo} className='mb-5 w-32' alt="" />
                  <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime deleniti, magni doloribus pariatur voluptatem perferendis ratione consequatur rem voluptatibus ipsa minus! Enim neque, qui reiciendis magni earum atque voluptates! </p>
            </div>
            <div className="">
                  <h3 className='text-xl font-medium mb-5'>COMPANY</h3>
                  <ul className='text-gray-600 flex flex-col gap-1'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li> 
                        <li>Terms & Conditions</li>
                  </ul>
            </div>
            <div className="">
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-1  text-gray-600 '>
                    <li>+1-131-32324-4242</li>
                    <li>contact@gmail.coms</li>
                    <li></li>
                  </ul>
            </div>

      </div>
            <div className="text-gray-400 ">
                  <hr />
                  <p className='py-5 text-sm text-center'>Copyright 2025 forever.com - ALL Right Reserved.</p>
            </div>
    </div>
  )
}

export default Footer