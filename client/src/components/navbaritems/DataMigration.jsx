import React from 'react';

const DataMigration = () => {
  return (
    <div>
      <section className="relative bg-white py-16 lg:pt-[100px]">
        <div class="mx-auto max-w-7xl px-8 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-5/12">
              <h1 class="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Data <span class="text-primary">Migration</span>
              </h1>
              <p className="text-slate-500 mb-8 max-w-[480px] text-base">
                An important part of choosing 'Your Cloud' platform is ensuring
                your data is migrated and synchronized making the transition to
                the cloud effective. Businesses are migrating to the cloud to
                reduce management overhead and increase the agility and speed
                with which they can run their businesses. These specialized
                workloads often require certified hardware and complicate
                licensing and support agreements. This solution provides a path
                to modernize your application infrastructure landscape, while
                maintaining your existing investments and architecture.
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
                    src="https://media.amaratechit.com/wp-content/uploads/2022/11/migration-sync.jpg"
                    alt="hero section img"
                    class="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-20">WHY CHOOSE US?</h2>

          <div className="grid lg:gap-x-12 lg:grid-cols-3">
            <div className="mb-12 lg:mb-0">
              <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary rounded-full shadow-lg inline-block -mt-8">
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-dollar-sign"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-4">Optimize Costs</h5>
                  <p>
                    Mitigate additional licensing cost to migrate your data
                    workloads to a virtualized cloud environments by up to 50%,
                    or allow you to certify to own your ULA licenses in
                    perpetuity Save 20% on compute shapes vs. similar size
                    virtualized shapes
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary rounded-full shadow-lg inline-block -mt-8">
                    <svg
                    fill="#ffffff"
                    className="w-8 h-8 text-white"
                      viewBox="0 0 16 16"
                    >
                      {' '}
                      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />{' '}
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-4">
                    Gain Flexible Operations
                  </h5>
                  <p>
                    Reduce data center and IT operations costs Reduce dependency
                    by leveraging Microsoft Azure, Google ecosystem services
                    like BigQuery and CloudSQL for database operations
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary rounded-full shadow-lg inline-block -mt-8">
                    <svg
                      className="w-8 h-8 text-white"
                     
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-4">
                    Reduce Deployment Risk
                  </h5>
                  <p>
                    Reduce the cost and time to deployment of disaster recovery,
                    cloning and test/dev by using our embedded serverless DR
                    solution Keeping your data up to date and relevant in Google
                    Workspace and Microsoft 365 platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataMigration;
