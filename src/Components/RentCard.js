import React from "react";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
const RentCard = () => {
  return (
    <div class='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div class='card-body'>
        <div className='mt-[-15px]'>
          <h2 class='text-[1.5rem] text-primary'>
            $1,200<span className='text-gray-300 text-[16px]'>/month</span>
          </h2>
        </div>
        <h1 className='text-[1.5rem] p-0 mt-[-10px]'>Palm Harbor</h1>{" "}
        <p className='text-gray-400 mt-[-5px] text-[16px] capitalize'>
          2699 green valley, higland fl, 33455
        </p>
        <div class='card-actions text-[17px]'>
          <div className='flex justify-between items-center gap-1 text-gray-400'>
            <BiBed />
            <span>{"3"}Beds</span>
          </div>
          <div className='flex justify-start items-center gap-1 text-gray-400'>
            <BiBath />
            <span>{"2"}Bathrooms</span>
          </div>
          <div className='flex justify-start items-center gap-1 text-gray-400'>
            <AiOutlineCodeSandbox />
            <span>
              5*7 m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
