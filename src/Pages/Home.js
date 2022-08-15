import React from "react";
import RentCard from "../Components/RentCard";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <div className='lg:mx-[10%] md:mx-[4%]'>
      <SearchBar />{" "}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <RentCard />
      </div>
    </div>
  );
};

export default Home;
