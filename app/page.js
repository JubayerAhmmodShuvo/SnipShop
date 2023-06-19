"use client"

import Link from "next/link";
import Header from "./Component/Header";
import Blog from "./Blog/Blog";
import Footer from "./Component/Footer";
import AnotherNav from './Component/AnotherNav';

// Mark the parent component as a client entry
function Home() {
  return (
    <>
      <Header />
     <AnotherNav />
     
      <Footer />
    </>
  );
}

Home.entryName = 'use client'; // Add this line to mark the parent component

export default Home;
