import React from 'react';

const VideoConference = () => {
  return (
    <>
      <section className="relative bg-white py-16 lg:pt-[100px]">
        <div class="mx-auto max-w-7xl px-8 md:px-6">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-5/12">
              <h1 class="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Video <span class="text-primary">Conferencing</span>
              </h1>
              <p className="text-slate-500 mb-8 max-w-[480px] text-base">
                Did you know Video Conferencing is now no longer an expensive
                resource for Businesses? Not only can you save time and travel
                to meetings, but also engage with other professionals all around
                the world. Introducing Google Meet Hardware a curated set of
                components that work together end-to-end to make engaging
                meetings affordable and headache-free for schools and businesses
                big or small. Our accredited deployment team will work with you
                every step of the way from deploying and training your staff
                maximizing your investment in Google Meets Hardware. Fast,
                effective video meetings for everyone, everywhere with seamless
                Google Cloud integration, Zoom and Team application
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
                    src="https://media.amaratechit.com/wp-content/uploads/2022/11/videoimg.jpg"
                    alt="hero section img"
                    class="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid lg:gap-x-20 lg:grid-cols-3 mb-5 p-10">
        <div id="video1" className="flex  items-center p-5 ">
          <div className=" bg-[#00B894] flex justify-center items-center p-2 mr-2 rounded-full ">
            <svg
              width="24"
              height="24"
              className="text-white w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-video"
              viewBox="0 0 16 16"
            >
              {' '}
              <path
                d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                fill="white"
              ></path>{' '}
              <path
                d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"
                fill="white"
              ></path>{' '}
            </svg>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-lg lg:min-h-[167px] lg:max-w-[327px] lg:min-w-[327px] ">
            <h2 class="text-base font-bold mb-1 text-gray-800">
              Video conferencing made simple
            </h2>
            <p class="text-gray-700 text-sm">
              Affordable and easy to deployin just minutes, the Google Meet
              hardware kit is perfect for every meeting room, not just a select
              few.
            </p>
          </div>
        </div>

        <div id="video2" className="flex items-center p-5">
          <div className=" bg-[#1F0757] flex justify-center items-center p-2 mr-2 rounded-full">
          <svg  width="24"
              height="24"
              className="text-white w-7"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" fill="white"></path> </svg>
          </div>

          <div class="bg-white p-2 rounded-lg shadow-lg lg:min-h-[167px] lg:max-w-[327px] lg:min-w-[327px]">
            <h2 class="text-base font-bold mb-1 text-gray-800">
              On every call
            </h2>
            <p class="text-gray-700 text-sm">
              With the new 3cx VOIP phone feature, and interoperability
              solution, 3CX, Teams, Zoom and Google Meet kits perfect for any
              call to a colleague in Different locations or a partner in another
              country or platform.
            </p>
          </div>
        </div>
        <div id="video3" className="flex  items-center p-5">
          <div className=" bg-[#FDD76E] flex justify-center items-center p-2 mr-2 rounded-full">
          <svg width="24"
              height="24"
              className="text-white w-7"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z" fill="white"></path></svg>
          </div>

          <div class="bg-white p-2 rounded-lg shadow-lg lg:min-h-[167px] lg:max-w-[327px] lg:min-w-[327px]">
            <h2 class="text-base font-bold mb-1 text-gray-800">
            Easy process
            </h2>
            <p class="text-gray-700 text-sm">
            Joining a meeting with any of these platform is as simple as a tapping on the touchscreen will automatically Start your meeting with all of the details.
            </p>
          </div>
        </div>
        <div id="video4" className="flex  items-center p-5">
          <div className=" bg-primary flex justify-center items-center p-2 mr-2 rounded-full">
          <svg width="24"
              height="24"
              className="text-white w-7" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" fill="white"></path> </svg>
          </div>

          <div class="bg-white p-2 rounded-lg shadow-lg lg:min-h-[167px] lg:max-w-[327px] lg:min-w-[327px]">
            <h2 class="text-base font-bold mb-1 text-gray-800">
            Seamlessly integrated with various Cloud Platform
            </h2>
            <p class="text-gray-700 text-sm">
            Integration with 3cx, Zoom, Teams, Google Workspace and G Suite for Education Have been made simple to have video meetings, whether it’s integration with Google Calendar, Drive, or easy management for admins.
            </p>
          </div>
        </div>
        <div id="video5" className="flex  items-center p-5">
          <div className=" bg-[#00B894] flex justify-center items-center p-2 mr-2 rounded-full">
          <svg  width="24" height="24" className="text-white w-7" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-up-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z" fill="white"></path> </svg>
          </div>

          <div class="bg-white p-2 rounded-lg shadow-lg lg:min-h-[167px] lg:max-w-[327px] lg:min-w-[327px]">
            <h2 class="text-base font-bold mb-1 text-gray-800">
            Ready to go
            </h2>
            <p class="text-gray-700 text-sm">
            Built with a focus on security and reliability, the conference room is up and ready for your meeting.
            </p>
          </div>
        </div>


      </div>



      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 background-radial-gradient">
          <div class="px-6  text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 gap-12  items-center">
                <div class="mt-12 lg:mt-0">
                  <h1 class="text-4xl md:text-2xl xl:text-4xl font-bold tracking-tight mb-12">
                    Talk to us about our cloud services today
                  </h1>
                  <p className="text-slate-500 mb-8  text-base px-5">
                    Whether you’d like to move your business over to the cloud
                    or are seeking support for current cloud technologies you
                    use, we can help you meet your business goals and save time
                    and money with our bespoke cloud IT services.
                  </p>
                  <a
                    class="inline-block px-7 py-3 mr-2 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Free Consultation
                  </a>
                </div>
                <div class="mb-12 lg:mb-0">
                  <img
                    src="https://media.amaratechit.com/wp-content/uploads/2022/11/csm_paas_8bce14a254.png"
                    class="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoConference;
