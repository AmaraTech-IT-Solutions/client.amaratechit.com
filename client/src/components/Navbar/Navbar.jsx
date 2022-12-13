import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/brand/logo/logo.png';
import NavData from '../../data/LinkData';
import Modal from '../requestmodal/Modal';

const Navbar = () => {
  // Request Quote Button State
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState('');

  return (
    <nav className="">
      {/* main nav container above */}

      <div className=" flex items-center font-medium justify-between ">
        {/* logo */}
        <div className="p-5 lg:w-auto w-full flex justify-between ">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className=" z-101 object-contain md:cursor-pointer h-9"
            />
          </Link>

          <div
            className="z-101 lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        {/* primary nav */}
        <div className="lg:flex hidden  items-center justify-between max-w-full mx-auto font-[Poppins]  ">
          {/* desktop Menu */}
          <>
            {NavData.map((navlinks) => (
              <div className=" px-3 text-left md:cursor-pointer group ">
                <h1
                  className="py-7   text-sm flex justify-between items-center md:pr-0 pr-5"
                  onClick={() =>
                    clicked !== navlinks.navitem
                      ? setClicked(navlinks.navitem)
                      : setClicked('')
                  }
                >
                  {navlinks.navitem}

                  <span className="text-xl md:mt-1 md:ml-2 inline">
                    <ion-icon
                      name={`${
                        clicked === navlinks.navitem
                          ? 'chevron-up'
                          : 'chevron-down'
                      }`}
                    ></ion-icon>
                  </span>
                </h1>
                {navlinks.submenu && (
                  <div className=" z-100 absolute top-[62px] hidden group-hover:md:block hover:md:block">
                    <div className="p-3">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="bg-[#000032]">
                        <h1 className="py-3 px-3 text-white">{navlinks.portfolio}</h1>

                        <img src={navlinks.src} alt="" className="w-64" />
                      </div>
                      <div className=" bg-white w-64">
                        {navlinks.sublinks.map((e) => (
                          <div className="  p-2.5 bg-white w-64">
                            <Link
                              to={e.link}
                              className="text-sm hover:text-primary "
                            >
                              {e.subnav}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>

          <Link className="py-2 px-2 hover:text-[#CC0000]" to="/contact">
            Contact
          </Link>
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="xl:block hidden px-2 text-sm"
        >
          <button className="bg-[#006400] text-white  px-5 py-2 rounded-full text-sm ">
            Request A Quote
          </button>
        </div>
        <Modal onClose={handleClose} visible={showModal} />
      </div>

      <div
        className={`z-100 bg-white
          lg:hidden absolute w-full h-full bottom-0 py-24 pl-4 
          duration-500 ${open ? 'left-0' : 'left-[-100%]'}
          `}
      >
        <>
          {NavData.map((link) => (
            <div>
              <div className=" px-3 text-left md:cursor-pointer group">
                <h1
                  className="py-7   text-sm flex justify-between items-center md:pr-0 pr-5"
                  onClick={() =>
                    clicked !== link.navitem
                      ? setClicked(link.navitem)
                      : setClicked('')
                  }
                >
                  {link.navitem}

                  <span className="text-xl md:mt-1 md:ml-2 inline">
                    <ion-icon
                      name={`${
                        clicked === link.navitem ? 'chevron-up' : 'chevron-down'
                      }`}
                    ></ion-icon>
                  </span>
                </h1>
              </div>
              {/* END desktop menu */}


              {/* mobile menu */}

              <div
                className={`z-105 
          
                    ${clicked === link.navitem ? 'lg:hidden' : 'hidden'}
          `}
              >
                {link.sublinks.map((slink) => (
                  <div>
                    <div>
                      <Link
                        to={slink.link}
                        className="  pl-5 md:pr-0 pr-5 "
                        onClick={() => setOpen(!open)}
                      >
                        {slink.subnav}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* END mobile menu */}
            </div>
          ))}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
