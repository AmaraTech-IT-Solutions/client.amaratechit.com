import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white py-16 lg:pt-[100px]">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-5/12">
            <h1 class="text-primary mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Hosting
            </h1>
            <p className="text-slate-500 mb-8 max-w-[480px] text-base">
              Build a strong foundation for your website with AmaraTech as our
              customers are our priority and we advise on the best hosting
              solutions for your business. We provide flexible hosting solutions
              with recognized partners such as AWS, Microsoft, HostGator,
              Bluehost, and Google cloud that offers a slew of tools and
              services to help satisfy most website needs. We offer various
              forms of hosting to include but are not limited to shared,
              managed, or cloud.
            </p>

            <button className="w-full rounded-md bg-primary px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-primary duration-200 sm:w-auto">
              Get Started
            </button>

            {/* <!-- brand --> */}
            <div class="mt-6 flex flex-wrap gap-4">
              <img
                src="https://media.amaratechit.com/wp-content/uploads/2022/10/Slide1.jpg"
                alt="brand"
                class="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
              />
              <img
                src="https://media.amaratechit.com/wp-content/uploads/2022/10/Slide2.jpg"
                alt="brand"
                class="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
              />
              <img
                src="https://media.amaratechit.com/wp-content/uploads/2022/10/Slide3.jpg"
                alt="brand"
                class="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
              />
            </div>
          </div>

          <div class="hidden px-4 lg:block lg:w-1/12"></div>

          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://media.amaratechit.com/wp-content/uploads/2022/10/hosting.png"
                  alt="hero section img"
                  class="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
