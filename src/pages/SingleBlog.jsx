import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
    console.log(data);
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>
      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
            <p className='text-base text-gray-600 mb-6'>{content}</p>
            <div className='text-base text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit quaerat, voluptates quo dicta delectus enim velit suscipit, tempora eos quia laudantium, ex rem sequi quas dolorum minima assumenda libero?</p><br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur? Vitae rem sunt voluptate accusantium aut placeat veniam, dignissimos atque quae aperiam minus veritatis accusamus ipsam vel asperiores debitis deleniti?</p><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis sint optio inventore praesentium nisi animi? Rerum corporis perspiciatis exercitationem sapiente cum provident sint voluptas assumenda ut dicta! Aliquam, consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam reiciendis amet. Quas non earum quis dignissimos, impedit nesciunt commodi. Quidem cupiditate corporis nostrum adipisci repellat, aliquam aperiam fugiat maxime!</p><br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis labore numquam quis illum hic dicta, provident aut a vitae quibusdam officia velit reiciendis tempora suscipit totam, ad sint praesentium eius quos. Ipsum non eaque in sint esse neque quibusdam, possimus dignissimos ratione porro, fugiat reiciendis est sunt impedit ea, nisi quas veniam! Expedita sequi aliquid cupiditate culpa quas officia, perspiciatis eveniet totam sed fugiat exercitationem voluptatem, repudiandae cum nostrum impedit suscipit, sit illo itaque sint!</p>
            </div>
        </div>
        <div className='lg:w-1/2'>
            <SideBar/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
