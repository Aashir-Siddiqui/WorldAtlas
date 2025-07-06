import React from 'react';
import { motion } from 'framer-motion';

export default function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }) {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === 'asc' ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-7xl mx-auto mb-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:w-1/2 relative"
      >
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleInputChange}
          className="w-full bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 placeholder-neutral-400 text-base rounded-4xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-2 w-full sm:w-auto"
      >
        <button
          onClick={() => sortCountries('asc')}
          className="bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 text-base rounded-4xl py-2 px-4 hover:bg-blue-500/[0.2] hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries('dsc')}
          className="bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 text-base rounded-4xl py-2 px-4 hover:bg-blue-500/[0.2] hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
        >
          Dsc
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full sm:w-1/4"
      >
        <select
          value={filter}
          onChange={handleSelectChange}
          className="w-full bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 text-base rounded-4xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D1D5DB'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundSize: '1.5em',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <option value="All" className="bg-neutral-950 text-neutral-300">All Regions</option>
          <option value="Asia" className="bg-neutral-950 text-neutral-300">Asia</option>
          <option value="Americas" className="bg-neutral-950 text-neutral-300">Americas</option>
          <option value="Africa" className="bg-neutral-950 text-neutral-300">Africa</option>
          <option value="Europe" className="bg-neutral-950 text-neutral-300">Europe</option>
          <option value="Oceania" className="bg-neutral-950 text-neutral-300">Oceania</option>
        </select>
      </motion.div>
    </section>
  );
}