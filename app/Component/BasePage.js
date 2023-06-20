import React from 'react';

const BasePage = () => {
  return (
    <>
      <div className="relative">
        <div className="flex bg-primary py-24">
          <div className="w-1/2 p-8 pb-12">
            <p className="text-black text-center lg:ml-24">100% QUALITY, 100% SATISFACTION</p>
            <h1 className="text-6xl text-black text-end font-extrabold font-serif mb-4">
              Where the world <br /> comes to shop.
            </h1>
            <div className="flex justify-center">
              <button className="bg-black lg:mt-12 text-white px-4 py-2 rounded-full">Shop Now</button>
            </div>
            <div className="flex justify-end m-10">
              <p className="text-3xl font-serif text-black text-end align-end justify-end font-bold">
                $110.00 <br /> Starts From
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col relative">
            <div className="absolute left-0 top-0 transform rotate-45">
              <div className="bg-white border-sky-500 rounded-full border-8">
                <img
                  src="https://www.nikon.co.uk/globalassets/digizuite/163006-en-z50_18-140dx_3.5-6.3_front34l.png/OptimizelyDesktopPNG"
                  alt="Big Image"
                  className="w-full h-96 rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-end lg:mr-32">
              <img
                src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80.jpg"
                alt="Small Image 1"
                className="w-32 h-32 rounded-full bg-gray-300 mb-4"
              />
              <img
                src="https://diamu.com.bd/wp-content/uploads/2023/01/Kingjoy-VT-866-Aluminum-Alloy-Tripod.jpg"
                alt="Small Image 2"
                className="w-32 h-32 rounded-full bg-gray-300"
              />
            </div>
            <div className="flex justify-center items-center mt-32">
              <button className=" text-indigo-800 px-2 py-1 rounded-md">Prev</button>
              <div className="flex items-center space-x-2 mx-4">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <button className="text-indigo-800 px-2 py-1 rounded-md">Next</button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 transform rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="fill-current text-white"
          >
            <path
              fillOpacity="0.1"
              d="M0,64L60,90.7C120,117,240,171,360,160C480,149,600,75,720,90.7C840,107,960,213,1080,240C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
          <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,202.7C672,203,768,181,864,197.3C960,213,1056,267,1152,277.3C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default BasePage;
