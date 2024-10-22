import React from 'react'

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Services</h2>
        <p className='text-lg lg:text-xl'>
          We provide a range of services to help you grow your blog and reach a wider audience.
        </p>
      </div>

      {/* Services Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Service 1 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Content Creation</h3>
            <p className='text-gray-600'>
              Our team can help you create high-quality blog posts, articles, and multimedia content that engage your audience and build your brand.
            </p>
          </div>

          {/* Service 2 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>SEO Optimization</h3>
            <p className='text-gray-600'>
              We offer SEO consulting to ensure your blog ranks higher on search engines, helping you get discovered by a broader audience.
            </p>
          </div>

          {/* Service 3 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Design Services</h3>
            <p className='text-gray-600'>
              Enhance your blog's visual appeal with our design services, including custom themes, logos, and graphics tailored to your brand.
            </p>
          </div>

          {/* Service 4 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Guest Blogging</h3>
            <p className='text-gray-600'>
              Collaborate with us through guest blogging to reach new readers and expand your influence in the blogging community.
            </p>
          </div>

          {/* Service 5 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Social Media Strategy</h3>
            <p className='text-gray-600'>
              Let us help you build a strong social media presence to connect with your audience and promote your blog more effectively.
            </p>
          </div>

          {/* Service 6 */}
          <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-4'>Blogging Workshops</h3>
            <p className='text-gray-600'>
              We provide online and in-person workshops to help you improve your blogging skills, from writing to promotion.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-indigo-700 text-white text-center py-10'>
        <h3 className='text-3xl font-bold mb-4'>Interested in Our Services?</h3>
        <p className='mb-6'>Get in touch to learn more about how we can help your blog grow.</p>
        <a href="/contact" className='inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-200'>
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Services
