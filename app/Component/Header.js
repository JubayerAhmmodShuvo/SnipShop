import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const cartItemCount = 5;

  return (
    <>
     <div className="navbar bg-neutral flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 mr-20 sm:mb-0">
        <a className="text-xl font-bold mr-20" href="#">
          <span className="text-rose-700">S</span>
          <span className="text-white">nip</span>
          <span className="text-rose-700">S</span>
          <span className="text-white">hop</span>
        </a>
      </div>
      <div className="flex items-center justify-center flex-grow mb-4 sm:mb-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered bg-white rounded-r-none pr-12 sm:w-80"
          />
          <button className="absolute right-0 top-0 h-full w-12 bg-blue-500 rounded-l rounded-r flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <a href="#" className="text-white">
            Account
          </a>
        </div>
       
        <div>
          <a href="#" className="text-white">
            My Items
          </a>
        </div>
        <div className="mr-6 flex items-center ">
          <span className="text-sm text-white rounded-full ml-8">
            <span className="cart-item-count">{cartItemCount}</span>
          </span>
          <FaShoppingCart className="ml-1 text-white" />
        </div>
        <div className="dropdown dropdown-end mr-8  ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sbVNI2XyCxvZWhhxs9R3nyNP-IsvIpBFlkVse7T5Lg&s" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2  shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge ">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
      </div>
    
    </>
  );
};

export default Navbar;
