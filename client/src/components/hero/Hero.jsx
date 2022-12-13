import React, { useState, useEffect } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './Hero.css';

const Hero = ({ sliderdata }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderdata.length;

const autoScroll = true;
let slideInterval;
let IntervalTime = 6700;

function auto() {
  slideInterval = setInterval(nextSlide, IntervalTime);
}


  const nextSlide = ()=> {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  };
  const prevSlide = ()=> {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 :  currentSlide - 1)
  };

  useEffect(()=> {

    setCurrentSlide(0)
  }, [])

  useEffect(()=> {
      if(autoScroll){
        auto();
      }
   return ()=> clearInterval(slideInterval);
  }, [currentSlide])

  return (
    <div className="slider">
      {sliderdata.map((e, i) => {
        return (
          <>
            <div
              className={i === currentSlide ? 'slide current' : 'slide'}
              key={i}
            >
              {i === currentSlide && (
                <div id="content" className="flex justify-center absolute ">
                  <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                      {e.title}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">{e.desc}</p>
                    
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-[#CC0000] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#CC0000] hover:shadow-lg focus:bg-[#CC0000] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#CC0000] active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
                      >
                        Contact Us
                      </button>
                    
                  </div>
                </div>
              )}
            </div>
            <img
              className="z-0 max-w-full h-full object-cover object-center"
              src="https://media.amaratechit.com/wp-content/uploads/2022/10/hero1-scaled.jpeg"
              alt="slide"
            />
          </>
        );
      })}

      <div className="absolute w-full top-1/2 transform -translate-y-1/2  px-3 flex justify-between items-center ">
        <button
         onClick={prevSlide}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
         
        >
          <AiOutlineLeft size={30} />
        </button>

        <button
        onClick={nextSlide}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          
        >
          <AiOutlineRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
