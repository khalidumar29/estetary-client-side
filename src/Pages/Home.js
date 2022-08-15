import React from "react";
import FilterBar from "../Components/FilterBar";
import RentCard from "../Components/RentCard";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div className='lg:mx-[10%] md:mx-[4%]'>
      <SearchBar /> <FilterBar />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-3'>
        <RentCard />
        <RentCard />
        <RentCard />
      </div>
    </div>
  );
};

export default Home;
