import React from 'react';
import Hero from '../components/hero/Hero';
import Tech from '../components/techs/Tech';
import Product from '../components/product/Product'
import { productdata, sliderdata, techs } from '../data/DataSource';
import About from "../components/about/About";
const Home = () => {
  return (
    <div>
      <Hero sliderdata={sliderdata}/>
      <About />
      <Tech techs={techs} />
      <div className='grid items-center'>
        <h1 className=' p-2 m-2 text-center text-5xl lg:text-4xl md:text-3xl font-bold text-primary filter
         drop-shadow-lg'>Buy Now</h1>
      </div>
     
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4">
      {productdata.map((e,i)=> <Product key={i} data = {e}/>)}
      </div>
     
    </div>
  );
};

export default Home;
