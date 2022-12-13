import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
  const [toggleTabs, setToggleTabs] = useState(1);

  const toggletab = (index) => {
    setToggleTabs(index);
  };
  return (
    <>
     

      <div>
        {/* MAIN TABS CONTAINER STARTS  */}
        <div className="flex flex-row">
          {/* TITLE TABS  STARTS  */}
          <div className=" text-gray-700 text-base ">
            <div
              className={toggleTabs === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggletab(1)}
            >
              IT Consulting
            </div>
            <div
              className={toggleTabs === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggletab(2)}
            >
              Technology
            </div>
            <div
              className={toggleTabs === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggletab(3)}
            >
              Digital Services
            </div>
            <div
              className={toggleTabs === 4 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggletab(4)}
            >
              Procurement
            </div>
            <div
              className={toggleTabs === 5 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggletab(5)}
            >
              Point-of-Sale Systems
            </div>
          </div>
          {/* TITLE TABS  ENDS  */}


          <div className="content-tabs">
            <div
              className={
                toggleTabs === 1 ? 'content active-content' : 'content'
              }
            >
              <h2 className=" text-slate-800 m-2  font-bold leading-snug sm:text-[12px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                IT CONSULTING
              </h2>
              <p className="text-slate-500 mb-8  text-base">
                <div className="flex justify-center">
                  <ul className="bg-white rounded-lg border border-gray-200  text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      AmaraTech’s IT Solutions provides the productive power of
                      IT consulting and service solutions into business
                      operations by systematically applying our digital, cloud,
                      communication, and cognitive technologies that are
                      customized to fit client needs
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full">
                      {' '}
                      We deliver technology-based guidance and advice as it
                      relates to the modernization and optimization of existing
                      methodologies. In collaboration with our clients and
                      partners, we help define the project strategy and roadmap,
                      clarify requirements, and prepare the required
                      documentation to ensure achieved expectations and overall
                      efficiency. IT Services
                    </li>
                    <li className="px-6 py-2 border-b border-gray-200 w-full">
                      {' '}
                      AmaraTech IT Solutions strives to bring the productive
                      power of IT consulting and service solutions into
                      businesses’ operations by systematically applying our
                      digital, cloud, communication, and cognitive technologies
                      that are customized to fit client needs.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div
              className={
                toggleTabs === 2 ? 'content active-content' : 'content'
              }
            >
              <h2 className=" text-slate-800 m-3 text-xl font-bold leading-snug sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                TECHNOLOGY
              </h2>
              <p className="text-slate-500 mb-8  text-base">
                <div className="flex justify-center">
                  <ul className="bg-white rounded-lg border border-gray-200  text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      Using networking, on-demand services, storage
                      applications, and other resources accessed via the
                      internet and provider cloud computing infrastructures, we
                      are able to improve clients’ speed, reliability, security,
                      scalability, and productivity. With cloud services,
                      processes can be automated, flexible, collaborative, and
                      integrated into applications to ensure best practices.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div
              className={
                toggleTabs === 3 ? 'content active-content' : 'content'
              }
            >
              <h2 className=" text-slate-800 m-3 text-xl font-bold leading-snug sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                DIGITAL SERVICES
              </h2>
              <p className="text-slate-500 mb-8  text-base">
                <div className="flex justify-center">
                  <ul className="bg-white rounded-lg border border-gray-200  text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      AmaraTech IT is a client-centric team of professionals
                      with a passion for creating, enhancing, and managing
                      amazingly responsive websites and digital experiences. We
                      combine powerful technologies, stunning visuals, and
                      innovative strategies to tell the organization’s story
                      while delivering data-driven results. Our relationships
                      are built on regular communication, measurement, and
                      reporting, ensuring consistent performance improvement.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div
              className={
                toggleTabs === 4 ? 'content active-content' : 'content'
              }
            >
              <h2 className=" text-slate-800 m-3 text-xl font-bold leading-snug sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                PROCUREMENT
              </h2>
              <p className="text-slate-500 mb-8  text-base">
                <div className="flex justify-center">
                  <ul className="bg-white rounded-lg border border-gray-200  text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      We acquire software and or hardware and other assets to
                      drive organizational goals and efficiency by liaising on
                      clients’ behalf as a vendor partner; subsequently,
                      improving collaboration, communication, and productivity
                      amongst staff, partners, and stakeholders. We facilitate
                      the acquisition of products and services, making certain
                      that clients have all the necessary products and services
                      available to meet and exceed company expected outcomes.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <div
              className={
                toggleTabs === 5 ? 'content active-content' : 'content'
              }
            >
              <h2 className=" text-slate-800 m-3 text-xl font-bold leading-snug sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px]">
                POINT-OF-SALE SYSTEMS
              </h2>
              <p className="text-slate-500 mb-8  text-base">
                <div className="flex justify-center">
                  <ul className="bg-white rounded-lg border border-gray-200  text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                      POS Systems serve as the central component of most
                      businesses -- it is the “hub” for all business
                      transactions, inventory, and customer management. Our POS
                      System options are geared to providing clients more access
                      to better control of business and informed
                      decision-making. Our objective is to help customers to be
                      more successful and efficient in their businesses through
                      smart terminals, peripherals, services, and solutions that
                      are scalable and save time while managing needs
                      effectively.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
        {/* MAIN TABS CONTAINER STARTS ENDS */}
      </div>
    </>
  );
};

export default Tabs;
