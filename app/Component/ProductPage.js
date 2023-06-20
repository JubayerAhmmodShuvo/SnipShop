import React, { useState } from 'react';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Seven Zero Five',
      image: 'https://pngimg.com/d/bottle_PNG2090.png',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Clock',
      image: 'https://i.pinimg.com/originals/a9/35/20/a9352080b2127da1678cad38303a235e.png',
      price: 29.99,
    },
    {
      id: 3,
      name: 'Curology',
      image: 'https://cdn-icons-png.flaticon.com/512/76/76180.png',
      price: 39.99,
    },
    {
      id: 4,
      name: 'Chair',
      image: 'https://images-us.nivea.com/-/media/miscellaneous/media-center-items/5/5/0/228270-web_1010x1180_transparent_png.png',
      price: 49.99,
    },
    {
      id: 5,
      name: 'Chair',
      image: 'https://images-us.nivea.com/-/media/miscellaneous/media-center-items/5/5/0/228270-web_1010x1180_transparent_png.png',
      price: 59.99,
    },
  ];

  const getColor = (id) => {
    const colors = ['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-purple-300'];
    return colors[(id - 1) % colors.length];
  };

  const [activeNavItem, setActiveNavItem] = useState(1);

  const handleNavItemClick = (id) => {
    setActiveNavItem(id);
  };
   const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1);
  };

  
  const handlePreviousPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };

  return (
    <div className="my-24 mx-20">
      <h2 className="text-center text-3xl font-serif font-semibold mb-4 text-black">Shop Our Trending Products</h2>
      <p className="text-center text-black mb-8">Life is hard enough already. Let us make it a little easier.</p>
      <div className="flex justify-center mb-8">
        <nav className="flex space-x-4 mt-16 lg:mb-32">
          <button
            onClick={() => handleNavItemClick(1)}
            className={`text-lg font-semibold ${
              activeNavItem === 1 ? 'text-black underline' : 'text-gray-500'
            }`}
          >
           Fashion 
          </button>
          <button
            onClick={() => handleNavItemClick(2)}
            className={`text-lg font-semibold ${
              activeNavItem === 2 ? 'text-black underline' : 'text-gray-500'
            }`}
          >
          Technology
          </button>
          <button
            onClick={() => handleNavItemClick(3)}
            className={`text-lg font-semibold ${
              activeNavItem === 3 ? 'text-black underline' : 'text-gray-500'
            }`}
          >
            Interior
          </button>
          <button
            onClick={() => handleNavItemClick(4)}
            className={`text-lg font-semibold ${
              activeNavItem === 4 ? 'text-black underline' : 'text-gray-500'
            }`}
          >
            Food & Drink
          </button>
        </nav>
      </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className={`rounded-lg shadow p-2 flex items-center relative overflow-visible ${getColor(
              product.id
            )}`}
          >
            <div className="w-full sm:w-1/2 pr-4">
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <div className="flex flex-col mt-2">
                <div className="text-black text-lg font-semibold">Starting from</div>
                <div className="text-orange-500 text-lg font-semibold">${product.price}</div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-full relative">
              <div className="h-48 sm:h-full absolute right-0 top-0 -mt-1/2 transform -translate-y-1/2">
                <img src={product.image} alt={product.name} className="h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
