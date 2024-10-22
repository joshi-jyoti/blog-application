import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const content = {
    All: "This is the content for all categories.",
    Startups: "Here is some information about startups.",
    Security: "Security-related content goes here.",
    AI: "AI content is displayed here.",
    Apps: "App-related information appears here.",
    Tech: "Tech news and content is shown here."
  };

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      
      // Filter by category
      if (selectedCategory && selectedCategory !== 'All') {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]); // Depend on selectedCategory to refetch when it changes

  // Page change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Category change handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category === 'All' ? null : category); // null for All, otherwise the category
    setCurrentPage(1); // Reset to page 1
    setActiveCategory(category); // Set the active button
  };

  return (
    <div>
      {/* Category section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange} // Pass the category change handler here
          activeCategory={activeCategory} // Pass current active category for visual feedback
        />

        {/* Display the content based on the active category */}
        <div className="mt-4">
          {content[activeCategory]}
        </div>
      </div>

      {/* BlogCards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* blog cards component */}
        <BlogCards 
          blogs={blogs} 
          currentPage={currentPage} 
          selectedCategory={selectedCategory} 
          pageSize={pageSize} 
        />
        {/* sidebar component */}
        <div>
          <SideBar/>
        </div>
      </div>

      {/* Pagination section */}
      <div>
        <Pagination 
          onPageChange={handlePageChange} 
          currentPage={currentPage} 
          blogs={blogs} 
          pageSize={pageSize} 
        />
      </div>
    </div>
  );
};

export default BlogPage;
