import React from 'react';

const SoftwareHardware = () => {
  return (
    <>
      <section className="relative bg-white py-16 lg:pt-[100px]">
        <div class=" px-8 md:px-6">
          <div class="flex flex-wrap justify-between items-center">
           

            <div class="w-full px-4 lg:w-6/12">
              <div >
                <div class="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://media.amaratechit.com/wp-content/uploads/2022/11/proimg.jpg"
                    alt="hero section img"
                    class="max-w-full "
                  />
                </div>
              </div>
            </div>
            <div class="hidden px-4 lg:block lg:w-1/12"></div>
            <div class="w-full lg:w-5/12">
              <h1 class="text-gray-900 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Procurement Services
              </h1>
              <h1 class="text-primary mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Buying from us as your trusted advisor
              </h1>
              <button className="w-full rounded-md bg-primary px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-primary duration-200 sm:w-auto">
                Talk to us
              </button>
             
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 lg:pt-[100px]">
        <div class="mx-auto  px-8 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-5/12">
              <h1 class="text-primary mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Software and Hardware
              </h1>
              <p className="text-slate-500 mb-8 max-w-[480px] text-base">
                Acquire software for clients to migrate; upgrade; liaise on
                behalf as partner; improve collaboration, communication, and
                productivity amongst staff, partners, and stakeholders; backup
                and secure data; data analytics; remote workspace; VoIP/3CX; POS
                systems; acquiring hardware provide solutions for client to
                improve operations using advanced technology
              </p>
              <p className="text-slate-500 mb-8 max-w-[480px] text-base">
                We offer a real alliance to our local clients. The benefits we
                bring include many intangibles: confidence, reliability, knowing
                that somebody will be there to answer questions and help at the
                important times. During your consultation for your hardware or
                software purchase.
              </p>
             
            </div>

            <div class="hidden px-4 lg:block lg:w-1/12"></div>

            <div class="w-full px-4 lg:w-6/12">
              <div class="lg:ml-auto lg:text-right">
                <div class="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://media.amaratechit.com/wp-content/uploads/2022/11/softwareimg.jpg"
                    alt="hero section img"
                    class="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL BELOW */}

      <div id="main" className=" grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3  ">
        <div
          id="3"
          className="mx-auto mb-5 max-w-[350px] min-h-[467.77px] hover:bg-primary text-gray-700 shadow-lg hover:text-white rounded-md"
        >
          <div className="flex flex-col justify-center items-center p-7">
            <div className="bg-[#1F0757] rounded-full w-[67px] h-[67px] flex justify-center items-center">
              <svg
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                {' '}
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                  fill="white"
                ></path>{' '}
              </svg>
            </div>
            <h1 className="text-3xl  p-2">Competitive Pricing</h1>
            <p className="text-center p-2">
              As an established Value Added Reseller, and partners with several
              distributors, We can offer very competitive pricing for a variety
              of hardware and software technology for schools, Multi-Academy
              Trusts and Businesses.
            </p>
          </div>
        </div>
        <div
          id="1"
          className="mx-auto mb-5 max-w-[350px] min-h-[467.77px] hover:bg-primary text-gray-700 shadow-lg hover:text-white rounded-md"
        >
          <div className="flex flex-col justify-center items-center p-7">
            <div className="bg-[#1F0757] rounded-full w-[67px] h-[67px] flex justify-center items-center">
            <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
            </div>
            <h1 className="text-3xl  p-2">Try before you buy</h1>
            <p className="text-center p-2">
              No obligation loans for Schools, Multi Academy Trusts and
              Businesses on a majority of equipment from our extensive product
              range, ensuring you choose the right product to deliver the right
              outcomes and avoid costly mistakes.
            </p>
          </div>
        </div>
        <div
          id="2"
          className="mx-auto mb-5 max-w-[350px] min-h-[467.77px] hover:bg-primary text-gray-700 shadow-lg hover:text-white rounded-md"
        >
          <div className="flex flex-col justify-center items-center p-7">
            <div className="bg-[#1F0757] rounded-full w-[67px] h-[67px] flex justify-center items-center">
              <svg
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <h1 className="text-3xl   p-2">Excellent Service</h1>
            <p className="text-center p-2">
              We believe in excellent customer service and going the extra mile,
              so if you are not sure a product is right for you just contact us
              to request a FREE no obligation consultation where one of our
              consultancy staff will be able to advise you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareHardware;
