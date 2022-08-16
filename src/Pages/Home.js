import React, { useEffect, useState } from "react";
import FilterBar from "../Components/FilterBar";
import RentCard from "../Components/RentCard";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  const [filteredValue, setFilteredValue] = useState(false);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    fetch("https://calm-shelf-39133.herokuapp.com/property")
      .then((res) => res.json())
      .then((data) => {
        if (!filteredValue) {
          setRents(data);
        } else if (filteredValue) {
          const price = filteredValue.price.split("-");
          const lowPrice = parseInt(price[0].slice(1));
          const highPrice = parseInt(price[1].slice(1));
          const filteredRents = data.filter(
            (d) =>
              d.location === filteredValue.location &&
              d.property_type.toLowerCase() === filteredValue.property_type &&
              d.price >= lowPrice &&
              d.price < highPrice &&
              d.date === filteredValue.date
          );
          setRents(filteredRents);
        }
      });
  }, [filteredValue]);

  return (
    <div className='lg:mx-[10%] md:mx-[4%]'>
      <SearchBar /> <FilterBar setFilteredValue={setFilteredValue} />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-3'>
        {rents.length > 0 ? (
          rents.map((rent) => <RentCard key={rent._id} rent={rent} />)
        ) : (
          <h1 className='tex-2xl text-center'>{rents.length} data found</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
