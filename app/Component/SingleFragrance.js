import React from 'react';

const SingleFragrance = ({ product }) => {
  
  const {id, title, description ,brand,rating, category,images  } = product;
  return (
     <div className="card w-96  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 gap-4">
    <img src={images[0]} alt="perfume" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    <h3 className="card-title">{title}</h3>
        <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
  );
};

export default SingleFragrance;