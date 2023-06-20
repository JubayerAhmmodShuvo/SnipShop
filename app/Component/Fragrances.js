import React, { useEffect, useState } from 'react';
import SingleFragrance from './SingleFragrance';

const Fragrances = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/fragrances')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleNextPage = () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    setCurrentPage((currentPage + 1) % (totalPages + 1) || 1);
  };

  const handlePrevPage = () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    setCurrentPage((currentPage - 1 + totalPages) % (totalPages + 1) || totalPages);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex flex-col justify-center items-center container lg:my-20 lg:py-8">
        <h2 className="text-3xl text-black font-bold mb-4 text-center font-serif ">
          Explore Most Popular Brands
        </h2>
        <button
          className="text-black font-bold py-2 px-4 self-end"
          onClick={handleNextPage}
        >
          See More &rarr;
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5  ">
        {currentProducts.map(product => (
          <SingleFragrance key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="text-black font-bold py-2 px-4 mr-2"
          onClick={handlePrevPage}
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
    </>
  );
};

export default Fragrances;
