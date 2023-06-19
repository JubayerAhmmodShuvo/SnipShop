import React, { useState } from 'react';

const testimonials = [
  {
    name: "Justin Pierre",
    comment: "They help them tap into consumers’ authentic and genuine opinions and further guide them along their decision-making process. Your own marketing can’t begin to compete with that level of authenticity.",
    review: "Product Seller",
    image: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
  },
  {
    name: "Allison Mosh",
    comment: "First, though, you need to create a strategy that actively involves acquiring great customer reviews that are thoughtful and effective. Seeing great customer review examples can help you start sourcing your own.",
    review: "Product Review",
    image: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
  },

];

const HeroPart = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, comment, review, image } = testimonials[currentTestimonial];

  return (
    <div className=" mx-auto p-4 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-end justify-center bg-accent rounded-3xl">
          <div className="w-96 h-96 rounded overflow-hidden ">
            <img src={image} alt="Testimonial" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center container p-20">
          <h2 className="text-2xl text-black font-bold mb-4">{name}</h2>
          <p className="text-sm text-gray-500 mb-5">{review}</p>
          <p className="text-lg text-black mb-4">{comment}</p>
        </div>
      </div>
      <div className="flex justify-center mt-6 ">
        <button
          className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2"
          onClick={handlePrevious}
        >
          &larr; 
        </button>
        <button
          className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNext}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HeroPart;


