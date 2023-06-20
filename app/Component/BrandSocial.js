import React from 'react';

const BrandSocial = () => {
  const logos = [
    { name: 'BMW', image: 'https://w1.pngwing.com/pngs/783/16/png-transparent-logo-bmw-car-bmw-m5-motorcycle-bmw-motorrad-symbol-emblem-circle.png' },
    { name: 'Apple', image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png' },
    { name: 'Nike', image: 'https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg' },
    { name: 'Mi', image: 'https://w0.peakpx.com/wallpaper/657/621/HD-wallpaper-xiaomi-glitter-logo-creative-blue-metal-background-xiaomi-logo-brands-xiaomi.jpg' },
    { name: 'Fila', image: 'https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png' },
    { name: 'Adidas', image: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1991-present.jpg' },
  ];

  return (
    <div className=" mx-auto  lg:py-48 lg:px-24 bg-base-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-20">
        <div className="grid grid-cols-3 gap-5 p-16">
          {logos.map((logo) => (
            <div key={logo.name} className="bg-white p-4 shadow-md rounded-lg">
              <img src={logo.image} alt={logo.name} className="w-20 h-20 mx-auto" />
             
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl text-black font-bold mb-4">Explore Most Popular Brands</h2>
          <p className="text-lg mb-4 ">Life is hard enough already. Let us make it a little easier.</p>
          <button className="text-black   font-bold py-2 px-4  ">
            See More &rarr;
          </button>
        </div>
        
      </div>
      

      <div className="flex flex-col sm:flex-row justify-center items-center lg:px-24 sm:p-4">
         <div className="w-1/2  ">
        <h2 className="text-3xl font-bold text-black mb-4 font-serif ">Sell Easily on  Socialmedia</h2>
        <p className="text-lg mb-4">Life is hard enough already. Let us make it a little easier.</p>
       <button className="text-black   font-bold py-2 px-4  ">
            See More &rarr;
          </button>
      </div>
        <div className="w-1/2 lg:py-72 lf:px-10">
          
        <div className="relative rounded">
          <img src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg" alt="Big Image" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="relative">
              <img src="https://assets.lenscrafters.com/is/image/LensCrafters/8053672770421__001.png" alt="Small Image 1" className="absolute w-1/2 h-1/2 -top-1/2 -left-1/2" />
              <img src="https://assets.lenscrafters.com/is/image/LensCrafters/8053672770421__001.png" alt="Small Image 2" className="absolute w-1/2 h-1/2 -bottom-1/2 -left-1/2" />
              <img src="https://assets.lenscrafters.com/is/image/LensCrafters/8053672770421__001.png" alt="Small Image 3" className="absolute w-1/2 h-1/2 -bottom-1/2 -right-1/2" />
              </div>
              
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default BrandSocial;
