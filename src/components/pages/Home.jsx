import React from 'react'
import { Button } from "../ui/moving-border"
import { NavLink } from 'react-router-dom';
import { Spotlight } from "../ui/spotlight-new";
import CardHoverEffectDemo from '../cards/Card';
import { PointerHighlight } from '../ui/pointer-highlight';

export default function Home() {
  return (
    <>
      <div className="relative flex h-full w-full overflow-hidden bg-black antialiased md:items-center md:justify-center">
        <Spotlight />
        <div className="p-5 w-full text-center relative z-10 max-w-3xl sm:max-w-4xl md:max-w-7xl mx-auto">
          <h1 className="text-neutral-300 text-[28px] md:text-7xl mt-40 font-bold flex items-center justify-center gap-1 md:gap-3">
            EXPLORE <PointerHighlight><span>WORLDATLAS</span></PointerHighlight>
          </h1>
          <p className='text-neutral-300 text-sm leading-6 sm:text-lg my-10 font-normal text-center'>Discover the world like never before with WorldAtlas, your ultimate guide to global geography and culture. Explore detailed information about every country, from vibrant capitals to unique traditions, all presented in an easy-to-navigate format. Whether you're a traveler, student, or curious explorer, WorldAtlas brings the world to your fingertips with stunning visuals and up-to-date data.</p>
          <NavLink to="/country">
            <Button
              borderRadius="10rem"
              className="bg-black text-neutral-300 p-2 cursor-pointer"
            >
              EXPLORE COUNTRIES
            </Button>
          </NavLink>
        </div>
      </div>
      <div className='bg-black py-40'>
        <CardHoverEffectDemo />
      </div>
    </>
  )
}
