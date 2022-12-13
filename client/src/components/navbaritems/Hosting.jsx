
import React from 'react';
import HostingPrice from "./HostingPrice";
const Hosting = () => {
  return (
    <>
   
    <section className="relative bg-white py-16 lg:pt-[100px]">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-5/12">
            <h1 class="text-primary mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Hosting
            </h1>
            <p className="text-slate-500 mb-8 max-w-[480px] text-base">
            Being our dedicated customer means building a strong foundation for your website is our priority and we advise the best hosting solutions for your business. We provide flexible hosting solutions with our recognized partners such as AWS, Microsoft, HostGator, Bluehost, and a Google cloud that offers a variety of tools, and services to help satisfy most website needs. We offer various forms of hosting to include, but are not limited to shared, managed, or cloud.
            </p>

            <button className="w-full rounded-md bg-primary px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-primary duration-200 sm:w-auto">
              Get Started
            </button>

            
          </div>

          <div class="hidden px-4 lg:block lg:w-1/12"></div>

          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://media.amaratechit.com/wp-content/uploads/2022/11/webhosting.jpg"
                  alt="hero section img"
                  class="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <HostingPrice />
    </>
  );
};

export default Hosting;
