import React, { useState } from 'react';

const AnotherNav = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <nav className="navbar flex justify-center">
      <ul className="navbar-items flex flex-col gap-5 md:flex-row md:justify-between">
        <li
          className={`navbar-item ${activeItem === 0 ? 'active' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <a href="#">Jwellery & Accessories</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <a href="#">Clothing & Shoes</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <a href="#">Home & Living</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          <a href="#">Wedding & Party</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 4 ? 'active' : ''}`}
          onClick={() => handleItemClick(4)}
        >
          <a href="#">Toys & Entertainment</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 5 ? 'active' : ''}`}
          onClick={() => handleItemClick(5)}
        >
          <a href="#">Art & Collection</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 6 ? 'active' : ''}`}
          onClick={() => handleItemClick(6)}
        >
          <a href="#">Cup Supplies & Tools</a>
        </li>
        <li
          className={`navbar-item ${activeItem === 7 ? 'active' : ''}`}
          onClick={() => handleItemClick(7)}
        >
          <a href="#">Vintage</a>
        </li>
      </ul>

      <style jsx>{`
        .navbar-items {
          padding: 0;
          list-style: none;
        }

        .navbar-item {
          margin-right: 1rem;
        }

        .navbar-item:last-child {
          margin-right: 0;
        }

        .navbar-item a {
          text-decoration: none;
          color: #000;
          border-bottom: 1px solid transparent;
        }

        .navbar-item.active a {
          border-bottom-color: red;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .navbar-items {
            flex-wrap: nowrap;
            justify-content: center;
            margin-top: 20px;
            gap: 5px;
          }

          .navbar-item {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default AnotherNav;
