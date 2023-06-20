import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

const CategoryPage = () => {
  const categories = [
    "smartphones", "laptops", "fragrances", "skincare", "groceries",
    "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes",
    "mens-shirts", "mens-shoes", "mens-watches", "womens-watches",
    "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCategories = categories.slice(startIndex, endIndex);


  const generateCardData = () => {
    const cardData = {};
    displayedCategories.forEach(category => {
      let imageUrl = '';

     
      if (category === 'smartphones') {
        imageUrl = 'https://example.com/smartphones.jpg';
      } else if (category === 'laptops') {
        imageUrl = 'https://example.com/laptops.jpg';
      } else if (category === 'fragrances') {
        imageUrl = 'https://example.com/fragrances.jpg';
      } else if (category === 'skincare') {
        imageUrl = 'https://example.com/skincare.jpg';
      } else if (category === 'groceries') {
        imageUrl = 'https://example.com/groceries.jpg';
      } else if (category === 'home-decoration') {
        imageUrl = 'https://example.com/home-decoration.jpg';
      } else if (category === 'furniture') {
        imageUrl = 'https://example.com/furniture.jpg';
      } else if (category === 'tops') {
        imageUrl = 'https://example.com/tops.jpg';
      } else if (category === 'womens-dresses') {
        imageUrl = 'https://example.com/womens-dresses.jpg';
      } else if (category === 'womens-shoes') {
        imageUrl = 'https://example.com/womens-shoes.jpg';
      } else if (category === 'mens-shirts') {
        imageUrl = 'https://example.com/mens-shirts.jpg';
      } else if (category === 'mens-shoes') {
        imageUrl = 'https://example.com/mens-shoes.jpg';
      } else if (category === 'mens-watches') {
        imageUrl = 'https://example.com/mens-watches.jpg';
      } else if (category === 'womens-watches') {
        imageUrl = 'https://example.com/womens-watches.jpg';
      } else if (category === 'womens-bags') {
        imageUrl = 'https://example.com/womens-bags.jpg';
      } else if (category === 'womens-jewellery') {
        imageUrl = 'https://example.com/womens-jewellery.jpg';
      } else if (category === 'sunglasses') {
        imageUrl = 'https://example.com/sunglasses.jpg';
      } else if (category === 'automotive') {
        imageUrl = 'https://example.com/automotive.jpg';
      } else if (category === 'motorcycle') {
        imageUrl = 'https://example.com/motorcycle.jpg';
      } else if (category === 'lighting') {
        imageUrl = 'https://example.com/lighting.jpg';
      }

      cardData[category] = {
        id: category,
        image: imageUrl,
        name: `${category} 1`,
        previousPrice: Math.floor(Math.random() * 100),
        newPrice: Math.floor(Math.random() * 100),
      };
    });
    return cardData;
  };

  const cardData = generateCardData();


  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1);
  };

  
  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };

  return (
    <div  >
      <div className="lg:mx-48 py-16  ">
        <h1 className=' text-3xl text-black font-bold mb-6 lg:ml-24 font-serif  ' >Shop By Category</h1>
        <p className='  text-black lg:ml-24' >Life is hard enough already. <br /> Let us make it a little easier.</p>
      <div className="flex sm:justify-end justify-center  lg:mr-20">
       
          <button
          className="text-black font-bold py-2 px-4 mr-2"
          onClick={handlePreviousPage}
        >
          &larr; Previous
        </button>
        <button
          className="text-black font-bold py-2 px-4 my-10"
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-5 lg:px-48 lg:py-20">
        {displayedCategories.map(category => (
          <div key={category} className="bg-white rounded-lg shadow p-2 flex flex-col items-center  relative">
            <img src={cardData[category].image} alt={cardData[category].name} className="w-32 h-32 object-cover mb-2" />
            <h3 className="text-sm font-semibold mb-1">{cardData[category].name}</h3>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-gray-500 line-through">${cardData[category].previousPrice}</span>
                <span className="text-sm font-semibold ml-1">${cardData[category].newPrice}</span>
              </div>
              <button
                className="text-white bg-black rounded-full p-2 absolute bottom-2 right-2"
                onClick={() => handleAddItem(category)}
              >
                <IoMdAddCircle size={20} color="white" />
              </button>
            </div>
          </div>
        ))}
      </div>
     

    </div>
  );
};

export default CategoryPage;
