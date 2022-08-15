import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=' md:mx-[2.5%] lg:mx-[5%]'>
      <div className='navbar justify-between bg-base-100'>
        <div className='flex items-center'>
          <img
            className='h-10 w-10'
            src={
              "https://i.ibb.co/b1nnkRL/Blue-Purple-Simple-Minimalist-company-Logo-1.png"
            }
            alt=''
            srcset=''
          />
          <Link
            to={""}
            className='btn btn-ghost normal-case text-xl text-primary font-bold'
          >
            Estatery
          </Link>
        </div>
        <div className='flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link className='font-semibold' to={""}>
                Rent
              </Link>
            </li>
            <li>
              <Link className='font-semibold' to={""}>
                Buy
              </Link>
            </li>
            <li>
              <Link className='font-semibold' to={""}>
                Sell
              </Link>
            </li>
            <li tabindex='0'>
              <Link className='font-semibold' to={""}>
                Manage Property
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </Link>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link className='font-semibold' to={""}>
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link className='font-semibold' to={""}>
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
            <li tabindex='0'>
              <Link className='font-semibold' to={""}>
                Resources
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </Link>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link className='font-semibold' to={""}>
                    Submenu 1
                  </Link>
                </li>
                <li>
                  <Link className='font-semibold' to={""}>
                    Submenu 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='flex gap-3'>
          <button className='btn btn-outline btn-primary capitalize'>
            login
          </button>
          <button className='btn btn-primary capitalize'>sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;