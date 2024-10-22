import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h2>
        <p className='text-lg lg:text-xl'>
          Have questions or feedback? Get in touch with us, we'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <div className='max-w-2xl mx-auto py-16 px-4'>
        <form className='space-y-6'>
          {/* Name Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input type='text' className='mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500' placeholder='Your Name'/>
          </div>

          {/* Email Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' className='mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500' placeholder='you@example.com'/>
          </div>

          {/* Subject Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Subject</label>
            <input type='text' className='mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500' placeholder='Subject'/>
          </div>

          {/* Message Input */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>Message</label>
            <textarea className='mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500' rows='5' placeholder='Write your message here...'></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button type='submit' className='w-full bg-indigo-600 text-white py-3 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none'>Send Message</button>
          </div>
        </form>
      </div>

      {/* Social Links and Address */}
      <div className='bg-gray-800 text-center text-white py-10'>
        <p>Follow us on:</p>
        <div className='flex justify-center space-x-6 mt-4'>
          <a href="https://twitter.com" className='hover:text-orange-600'>Twitter</a>
          <a href="https://instagram.com" className='hover:text-orange-600'>Instagram</a>
          <a href="https://facebook.com" className='hover:text-orange-600'>Facebook</a>
        </div>
        <p className='mt-6'>Email: contact@yourblog.com</p>
        <p>Address: 123 Blog Avenue, Web City</p>
      </div>
    </div>
  )
}

export default Contact
