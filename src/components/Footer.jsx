import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6 gap-5'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wider text-gray-400'>Categories</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Technology</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Lifestyle</a>
                            </li>
                        </ul>
                    </div>
                    {/* Popular Topics */}
                    <div>
                        <p className='font-medium tracking-wider text-gray-400'>Popular Topics</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Web Development</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Mobile Apps</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Cloud Computing</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Cybersecurity</a>
                            </li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <p className='font-medium tracking-wider text-gray-400'>Resources</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Tutorials</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Case Studies</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Whitepapers</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>eBooks</a>
                            </li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <p className='font-medium tracking-wider text-gray-400'>Company</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>About Us</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Careers</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Contact Us</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-600 transition-colors duration-300 hover:text-orange-600'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* subscription */}
                <div className='md:max-w-md lg:col-span-2'>
                    <p className='font-medium tracking-wider text-gray-400'>Subscribe for updates</p>
                    <form className='mt-4 flex-col md:flex-row'>
                        <input type="email" name="email" id="email" className='flex-grow w-full h-12 px-4
                        mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm
                        aspect-auto md:mr-2 md:mb:0 focus:border-purple-400 focus:outline-none'/>
                        <button type='submit' className='inline-flex items-center justify-center h-12 px-6
                        font-medium tracking-wide text-white transition duration-200 rounded shadow-md
                        hover:bg-orange-600 focus:outline-none border'>
                            Subscribe
                        </button>
                    </form>      
                </div>
            </div>

            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-900 sm:flex-row'>
                <p className='text-sm text-gray-500'>© Copyright 2024 | All rights reserved.</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-600 transition-all duration-300 hover:text-orange-600'><FaTwitter className='h-6 w-6'/></a>
                    <a href="" className='text-gray-600 transition-all duration-300 hover:text-orange-600'><FaInstagram className='h-6 w-6'/></a>
                    <a href="" className='text-gray-600 transition-all duration-300 hover:text-orange-600'><FaFacebook className='h-6 w-6'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
