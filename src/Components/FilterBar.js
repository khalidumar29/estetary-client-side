import React from "react";

const FilterBar = () => {
  const handleFilter = (e) => {
    const location = e.target.location.value;
    const date = e.target.date.value;
    const price = e.target.price.value;
    const property_type = e.target.property_type.value;
    const a = { location, date, price, property_type };
    console.log(a);
    e.preventDefault();
  };

  return (
    <div className='my-12'>
      <form
        onSubmit={handleFilter}
        className='grid grid-cols-5 bg-white rounded-lg'
      >
        <div className='border-r-2 p-4'>
          <p className='text-black-50'>Location</p>
          <input
            name='location'
            className='bg-transparent pt-2 focus:border-none focus:outline-none text-black'
            placeholder='type location'
            type={"text"}
          />
        </div>
        <div title='select move in date' className='border-x-2 p-4'>
          <p className='text-black-50'>When</p>
          <input
            name='date'
            className='focus:border-none pt-2 focus:outline-none'
            type='date'
          />
        </div>
        <div className='border-x-2 p-4'>
          <p className='text-black-50'>Price</p>
          <select
            name='price'
            className='select select-ghost pl-0 text-black-50 focus:border-none focus:outline-none'
          >
            <option>$100-$200</option>
            <option>$300-$400</option>
            <option>$500-$600</option>
          </select>
        </div>
        <div className='border-r-2 p-4'>
          <p className='text-black-50'>Property Type</p>
          <select
            name='property_type'
            className='select select-ghost pl-0 text-black-50 focus:border-none focus:outline-none'
          >
            <option>House</option>
            <option>Office</option>
            <option>Resorts</option>
          </select>
        </div>
        <div className='flex justify-center items-center'>
          <input
            type={"submit"}
            className='btn btn-primary w-[70%]'
            value='Search'
          />
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
