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
        imageUrl = 'https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Smartphone-Lead.png?w=1080';
      } else if (category === 'laptops') {
        imageUrl = 'https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg';
      } else if (category === 'fragrances') {
        imageUrl = 'data:image/jpeg;base64,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';
      } else if (category === 'skincare') {
        imageUrl = 'https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg';
      } else if (category === 'groceries') {
        imageUrl = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/11/09/FN_box-about-us-umamicart_s4x3.jpg.rend.hgtvcom.616.462.suffix/1668025739852.jpeg';
      } else if (category === 'home-decoration') {
        imageUrl = 'https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-275.jpg';
        
      } else if (category === 'furniture') {
        imageUrl = 'https://hatil.com/sites/default/files/Best-Furniture-Hatil_0_0.jpg';
      } else if (category === 'tops') {
        imageUrl = 'https://i0.wp.com/mnfashion.com.bd/wp-content/uploads/2022/11/Denim-Special-Tops-For-Stylish-Women-388.webp?fit=1000%2C1000&ssl=1';
      } else if (category === 'womens-dresses') {
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciemakfKuF1_b2h1VrKAbSKxdjw-SvDh2Qw&usqp=CAU';
      } else if (category === 'womens-shoes') {
        imageUrl = 'https://parade.com/.image/t_share/MTkzOTEzMDI5MzU1MTIwMTEy/facebook-page-cover-14.png';
      } else if (category === 'mens-shirts') {
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YT3XH808RRHFhqL8ER_QLyAXiHmJCcr5yPpZkvRgWa2luaNQ7afa1ikgyC4X-bYBtIo&usqp=CAU';
      } else if (category === 'mens-shoes') {
        imageUrl = 'https://media.wired.com/photos/609ae1bb42949dce92f153f2/3:2/w_1280%2Cc_limit/Gear_SS21_FUTURECRAFT_ALLBIRDS_BRAND_INNOVATION_PRODUCT_KV_2_PAIR.jpg';
      } else if (category === 'mens-watches') {
        imageUrl = 'https://m.media-amazon.com/images/I/81usCA-C9wL._AC_UY1000_.jpg';
      } else if (category === 'womens-watches') {
        imageUrl = 'https://www.newsonline.media/wp-content/uploads/2021/05/Popular-Women-Watch-Brands.jpg';
      } else if (category === 'womens-bags') {
        imageUrl = 'https://static-01.daraz.com.bd/p/a245a7793e01552764ed37c64d15d00e.jpg_750x750.jpg_.webp_.webp';
      } else if (category === 'womens-jewellery') {
        imageUrl = 'https://static-01.daraz.com.bd/p/80764e1eb2843eba667d634699fb3eb2.jpg';
      } else if (category === 'sunglasses') {
        imageUrl = 'https://static-01.daraz.com.bd/p/5372ae74ab266a7297d58620d01f62e7.jpg';
      } else if (category === 'automotive') {
        imageUrl = 'https://www.sgs.com/-/media/sgscorp/images/corporate/event-body-images/digital-automotive-diagnostics-interface.cdn.en-BD.1.jpg';
      } else if (category === 'motorcycle') {
        imageUrl = 'https://www.seastarsuperbikes.co.uk/wp-content/uploads/2023/01/23MY_Z-H2-SE_GY2_STU-1-1500x1000.png';
      } else if (category === 'lighting') {
        imageUrl = 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1123262.jpg&fm=jpg';
      }

      cardData[category] = {
        id: category,
        image: imageUrl,
        name: `${category} `,
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
          <div key={category} className="bg-white text-black rounded-lg shadow p-2 flex flex-col items-center  relative">
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
