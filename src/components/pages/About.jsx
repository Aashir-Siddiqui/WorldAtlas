import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import { Link } from 'react-router-dom';
import orgData from '../../api/orgData.json';
import { Button } from '../ui/moving-border';

export default function About() {
  return (
    <div className="bg-black min-h-screen">
      <BackgroundBeamsWithCollision>
        <div className="w-full bg-gradient-to-b from-slate-950 to-black/95 antialiased pt-20 pb-40 px-4 md:px-8 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl sm:max-w-4xl md:max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-5 h-screen"
          >
            <h1 className="text-neutral-300 text-4xl md:text-6xl font-bold flex items-center justify-center gap-2 md:gap-4">
              Discover the World with WorldAtlas
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl mt-6 font-normal">
              Your gateway to exploring every country’s culture, history, and geography.
            </p>
            <Link to="/country">
              <Button
                borderRadius="10rem"
                className="bg-black text-neutral-300 p-2 cursor-pointer"
              >
                EXPLORE COUNTRIES
              </Button>
            </Link>
          </motion.div>
          <div className="max-w-4xl mx-auto mt-16 md:mt-24">
            <h2 className="text-neutral-300 text-2xl md:text-3xl font-semibold text-center">
              Our Mission
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mt-6 font-normal text-center">
              We’re on a mission to make global knowledge accessible to everyone. From the peaks of the Himalayas to the streets of Tokyo, WorldAtlas brings you detailed, reliable, and engaging information about every nation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-12 md:mt-16">
            <h2 className="text-neutral-300 text-2xl md:text-3xl font-semibold text-center">
              Who We Are
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mt-6 font-normal text-center">
              WorldAtlas was born from a passion for travel and curiosity about the world. Our small team of explorers, researchers, and tech enthusiasts works tirelessly to curate accurate data and stories, helping you navigate the globe from your screen.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-0 sm:px-8">
            <h2 className="text-neutral-300 text-2xl md:text-3xl font-semibold text-center">
              Global <span className='text-blue-500'>Organizations</span>
            </h2>
            <p className="text-neutral-300 text-base md:text-lg mt-4 text-center">
              Explore key intergovernmental organizations shaping global cooperation and governance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {orgData.map((org) => (
                <motion.div
                  key={org.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: org.id * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-tl from-zinc-800 to-neutral-950 border border-zinc-700 rounded-4xl p-6 flex flex-col items-center"
                >
                  <img
                    src={org.image}
                    alt={`${org.name} logo`}
                    className="w-fit h-32 object-contain rounded-lg mb-4"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found';
                    }}
                  />
                  <div className="flex flex-col items-start justify-center gap-1 mt-5">
                    <h3 className="text-neutral-300 text-xl font-semibold">{org.name}</h3>
                    <p className="text-neutral-400 text-sm mt-2">Founded: {org.founded}</p>
                    <p className="text-neutral-400 text-sm">Members: {org.members}</p>
                    <p className="text-neutral-400 text-sm mt-2">{org.focus}</p>
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 text-blue-500 hover:text-blue-400 text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}