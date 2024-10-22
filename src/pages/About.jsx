import React from 'react'

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h2>
        <p className='text-lg lg:text-xl'>
          Learn more about our blog, our mission, and the team behind the content.
        </p>
      </div>

      {/* Main About Section */}
      <div className='max-w-6xl mx-auto py-16 px-4'>
        <h3 className='text-3xl font-bold mb-4'>Our Story</h3>
        <p className='text-gray-700 mb-8'>
          Our blog began with a passion for sharing knowledge on topics that matter. Whether it’s technology trends, web development tips, 
          or insights on the latest innovations, our mission is to create content that informs, educates, and inspires.
        </p>

        <h3 className='text-3xl font-bold mb-4'>What We Do</h3>
        <p className='text-gray-700 mb-8'>
          We cover a wide range of topics, from coding tutorials and tech reviews to personal insights and stories. Our goal is to provide 
          valuable content for everyone—from beginners to professionals—by offering guides, tools, and resources to help you succeed in 
          your journey.
        </p>

        <h3 className='text-3xl font-bold mb-4'>Our Mission</h3>
        <p className='text-gray-700 mb-8'>
          Our mission is simple: to provide clear, concise, and useful information to our readers. We believe that knowledge is empowering, 
          and our blog is dedicated to making complex ideas easy to understand. We strive to create content that not only educates but also 
          inspires curiosity and growth.
        </p>

        <h3 className='text-3xl font-bold mb-4'>Our Values</h3>
        <p className='text-gray-700 mb-8'>
          We are committed to:
          <ul className='list-disc ml-8'>
            <li className='mb-2'>Quality Content: We prioritize well-researched, valuable content that our readers can trust.</li>
            <li className='mb-2'>Inclusivity: Our blog is for everyone, regardless of experience level or background.</li>
            <li className='mb-2'>Innovation: We constantly explore new ideas, trends, and technologies to provide fresh and relevant information.</li>
            <li className='mb-2'>Community: We believe in building a community where readers can engage, ask questions, and grow together.</li>
          </ul>
        </p>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <h3 className='text-3xl font-bold mb-4'>Get In Touch</h3>
          <p className='text-gray-700 mb-8'>
            Have any questions or want to collaborate? We’d love to hear from you!
          </p>
          <a href="/contact" className='inline-block px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
