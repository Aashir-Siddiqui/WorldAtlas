import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../../api/postApi';
import Loader from '../loader/Loader';
import CountryCards from '../cards/CountryCards';
import SearchFilter from './SearchFilter';

export default function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }else{
      return country
    }
  }

  const filterRegion = (country) => {
    if(filter === "All") return country
    return country.region === filter
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))

  return (
    <section className="bg-black text-neutral-300 py-40 px-4 sm:px-8 h-full w-full">

      <section>
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
      </section>

      {isPending ? (
        <div className="flex justify-center items-center min-h-[55vh]">
          <Loader />
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center max-w-7xl mx-auto">
          {filterCountries.map((currCountry, index) => (
            <CountryCards country={currCountry} key={currCountry.id || index} />
          ))}
        </ul>
      )}
    </section>
  );
}