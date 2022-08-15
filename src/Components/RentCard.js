import React from "react";
import { IoBedSharp } from "react-icon";
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
        <div class='card-actions'>
          <div>
            <IoBedSharp /> bed
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCard;
