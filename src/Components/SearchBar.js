import React from "react";

const SearchBar = () => {
  return (
    <div className='flex justify-between items-center mt-8 mb-5'>
      <h1 className='lg:text-5xl md:text-4xl capitalize'>
        Search properties to rent
      </h1>
      <div>
        <input
          type='text'
          placeholder='Type here...'
          className='input input-bordered w-full max-w-xs'
        />
      </div>
    </div>
  );
};

export default SearchBar;
