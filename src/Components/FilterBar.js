import React, { useState } from "react";

const FilterBar = ({ setFilteredValue }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(undefined);
  const handleFilter = (e) => {
    e.preventDefault();
    const date1 = date.split("-");
    const date2 = date1[2] + "-" + date1[1].slice(1) + "-" + date1[0];
    const price = e.target.price.value;
    const property_type = e.target.property_type.value.toLowerCase();
    const a = { location, date: date2, price, property_type, search: true };
    setFilteredValue(a);
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
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div title='select move in date' className='border-x-2 p-4'>
          <p className='text-black-50'>When</p>
          <input
            name='date'
            className='focus:border-none pt-2 focus:outline-none'
            type='date'
            onChange={(e) => setDate(e.target.value)}
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
            disabled={location === "" || date === undefined}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
