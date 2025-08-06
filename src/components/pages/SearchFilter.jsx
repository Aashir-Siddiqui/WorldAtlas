import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SearchFilter({
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const timerRef = useRef();
  const regionTimerRef = useRef();
  const [regionSearch, setRegionSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["All", "Asia", "Americas", "Africa", "Europe", "Oceania"];

  const handleInputChange = (event) => {
    const value = event.target.value.trim();
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearch(value);
    }, 500);
  };

  const handleRegionSearch = (event) => {
    const value = event.target.value;
    clearTimeout(regionTimerRef.current);
    regionTimerRef.current = setTimeout(() => {
      setRegionSearch(value);
    }, 500);
  };

  const handleRegionSelect = (region) => {
    setFilter(region);
    setRegionSearch("");
    setIsOpen(false);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  const filteredRegions = regions.filter((region) =>
    region.toLowerCase().includes(regionSearch.toLowerCase())
  );

  return (
    <section className="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-7xl mx-auto mb-8 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full sm:w-1/2 relative"
      >
        <input
          type="text"
          placeholder="Search for a country..."
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-2 w-full sm:w-auto"
      >
        <button
          onClick={() => sortCountries("asc")}
          className="bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 text-base rounded-4xl py-2 px-4 hover:bg-blue-500/[0.2] hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries("dsc")}
          className="bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 text-base rounded-4xl py-2 px-4 hover:bg-blue-500/[0.2] hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 cursor-pointer"
        >
          Dsc
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full sm:w-1/4 relative"
      >
        <input
          type="text"
          placeholder={filter || "Search region..."}
          value={regionSearch || filter}
          onChange={handleRegionSearch}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 text-neutral-300 placeholder-neutral-400 text-base rounded-4xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D1D5DB'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 0.5rem center",
            backgroundSize: "1.5em",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
        />
        {isOpen && filteredRegions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute z-10 w-full bg-neutral-950 border border-zinc-700 rounded-4xl mt-1 max-h-40 overflow-y-auto"
          >
            {filteredRegions.map((region) => (
              <li
                key={region}
                onClick={() => handleRegionSelect(region)}
                className="px-4 py-2 text-neutral-300 bg-neutral-950 hover:bg-blue-500/[0.2] hover:text-blue-400 cursor-pointer"
              >
                {region}
              </li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </section>
  );
}
