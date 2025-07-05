// About.jsx
import React from 'react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import { PointerHighlight } from '../ui/pointer-highlight';
import CardHoverEffectDemo from '../cards/card';

export default function About() {
  return (
    <div className="bg-black/95">
      <BackgroundBeamsWithCollision>
        <div className="h-screen w-full bg-gradient-to-b from-black/95 to-gray-900 antialiased py-12 px-4 md:px-8 flex items-center justify-center flex-col">
          <div className="max-w-lg md:max-w-2xl mx-auto md:mx-0 md:ml-8 mb-12">
            <h2 className="text-neutral-300 text-3xl md:text-6xl mt-40 font-bold flex items-center justify-center gap-1 md:gap-3">
              About <PointerHighlight><span>WorldAtlas</span></PointerHighlight>
            </h2>
            <p className="text-neutral-300 text-base md:text-lg my-10 font-normal text-center">
              At WorldAtlas, we are passionate about connecting people with the world’s diverse cultures, geographies, and histories. Our mission is to provide accurate, up-to-date, and accessible information about every country on Earth, empowering travelers, students, and curious minds to explore and learn.
            </p>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}