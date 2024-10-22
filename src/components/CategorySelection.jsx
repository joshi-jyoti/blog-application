import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-950 font-semibold'>
      {/* "All" Button */}
      <button
        onClick={() => onSelectCategory("All")}
        className={`mr-2 ${activeCategory === "All" ? "active-button" : ""}`}
      >
        All
      </button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)} // Pass category to parent on click
          className={`mr-2  ${activeCategory === category ? "active-button" : ""}`} // Add active class if this is the active category
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
