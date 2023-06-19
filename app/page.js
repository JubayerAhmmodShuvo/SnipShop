"use client"

import Header from "./Component/Header";

import Footer from "./Component/Footer";
import AnotherNav from './Component/AnotherNav';
import HeroPart from './Component/HeroPart'

// Mark the parent component as a client entry
function Home() {
  return (
    <>
      <Header />
     <AnotherNav />
    <HeroPart></HeroPart>
      
      <Footer />
    </>
  );
}

Home.entryName = 'use client'; // Add this line to mark the parent component

export default Home;
