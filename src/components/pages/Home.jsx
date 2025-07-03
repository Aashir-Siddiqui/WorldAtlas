import React from 'react'
import { Button } from "../ui/moving-border"
import { NavLink } from 'react-router-dom';
import { BackgroundBeams } from "../ui/background-beams";

export default function Home() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div className="p-4 w-full text-center relative z-10">
        <h1 className='text-neutral-300 mt-40 md:mt-0 text-3xl md:text-7xl font-bold'>EXPLORE WORLDATLAS</h1>
        <p className='text-neutral-300 text-base md:text-lg max-w-2xl mx-auto my-10 font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus assumenda hic velit eligendi consectetur quibusdam sit molestias iusto, sint iste quis earum quidem voluptatem minus in delectus eveniet temporibus? Ipsam eum laboriosam iste! Blanditiis, sequi fugit maiores deserunt rerum aliquid.</p>
        <NavLink to="/country">
          <Button
            borderRadius="10 rem"
            className="bg-black text-neutral-300 p-2 cursor-pointer"
          >
            EXPLORE COUNTRIES
          </Button>
        </NavLink>
      </div>
      <BackgroundBeams />
    </div>
  )
}
