"use client"

import Header from "./Component/Header";

import Footer from "./Component/Footer";
import AnotherNav from './Component/AnotherNav';
import HeroPart from './Component/HeroPart'
import BrandSocial from './Component/BrandSocial'
import Fragrances from './Component/Fragrances'
import CategoryPage from './Component/CategoryPage'
import ProductPage from './Component/ProductPage'


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

Home.entryName = 'use client'; 

export default Home;
