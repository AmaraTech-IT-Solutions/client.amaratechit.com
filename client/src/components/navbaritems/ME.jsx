import React from 'react';

const ME = () => {
  return (
    <section className="relative bg-white py-16 lg:pt-[100px]">
      <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-5/12">
            <h1 class="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
            Mission & {' '}
              <span class="text-primary">Vision</span>
            </h1>
            <p className="text-slate-500 mb-8 max-w-[480px] text-base">
            AmaraTech’s focus is to determine the best possible strategies that will enable businesses to create long-term value, incorporating advanced technologies while increasing access to supportive resources.
            </p>

            <button className="w-full rounded-md bg-primary px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-primary duration-200 sm:w-auto">
             Talk to us
            </button>

            
          </div>

          <div class="hidden px-4 lg:block lg:w-1/12"></div>

          <div class="w-full px-4 lg:w-6/12">
            <div class="lg:ml-auto lg:text-right">
              <div class="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://media.amaratechit.com/wp-content/uploads/2022/10/techbg.jpg"
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

export default ME;
