"use client"

import Header from "./Component/Header";

import Footer from "./Component/Footer";
import AnotherNav from './Component/AnotherNav';
import HeroPart from './Component/HeroPart'
import BrandSocial from './Component/BrandSocial'
import Fragrances from './Component/Fragrances'
import CategoryPage from './Component/CategoryPage'
import ProductPage from './Component/ProductPage'

// Mark the parent component as a client entry
function Home() {
  return (
    <>
      <Header />
      <AnotherNav />
      <ProductPage />
      <CategoryPage />
      <Fragrances />
      <BrandSocial />
    <HeroPart></HeroPart>
      
      <Footer />
    </>
  );
}

Home.entryName = 'use client'; // Add this line to mark the parent component

export default Home;
