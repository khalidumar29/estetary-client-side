import React from "react";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
const RentCard = ({ rent }) => {
  const { location, price, address, roomDetails, Image, name } = rent;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img className='w-full h-[255px]' src={Image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <div className='mt-[-15px]'>
          <h2 className='text-[1.5rem] text-primary'>
            ${price}
            <span className='text-gray-300 text-[16px]'>/month</span>
          </h2>
        </div>
        <h1 className='text-[1.5rem] p-0 mt-[-10px] capitalize'>{name}</h1>{" "}
        <p className='text-gray-400 mt-[-5px] text-[16px] capitalize'>
          {address}, {location}
        </p>
        <div className='card-actions text-[17px]'>
          <div className='flex justify-between items-center gap-1 text-gray-400'>
            <BiBed />
            <span>{roomDetails.beds}Beds</span>
          </div>
          <div className='flex justify-start items-center gap-1 text-gray-400'>
            <BiBath />
            <span>{roomDetails.bathroom}Bathrooms</span>
          </div>
          <div className='flex justify-start items-center gap-1 text-gray-400'>
            <AiOutlineCodeSandbox />
            <span>
              {roomDetails.size} m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
