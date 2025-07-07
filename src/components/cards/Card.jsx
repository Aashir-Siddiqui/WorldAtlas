import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';
import ngoData from '../../api/ngoData.json';

export default function CardHoverEffectDemo() {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="max-w-4xl mx-auto my-14 md:my-24">
        <h1 className="text-3xl sm:text-5xl font-bold text-neutral-300 text-center">World Top <span className='text-blue-500'>NGOs</span></h1>
        <p
          className="text-neutral-300 text-base leading-6  md:text-lg mt-6 font-normal text-center"
        >
          Discover leading non-governmental organizations driving positive change through humanitarian aid, environmental conservation, and social empowerment worldwide.
        </p>
      </div>
      <HoverEffect
        items={ngoData.map((ngo, idx) => ({
          id: ngo.id || idx,
          title: ngo.name || 'N/A',
          official: ngo.official || 'N/A',
          headquarters: ngo.headquarters || 'N/A',
          reach: ngo.reach ? ngo.reach.toLocaleString() : 'N/A',
          link: ngo.link || '#',
          linkText: 'Learn More',
          target: '_blank',
          rel: 'noopener noreferrer',
        }))}
      />
    </div>
  );
}

// export function Card({ ngo }) {
//   return (
//     <div className="flex flex-col items-start justify-center gap-3 border rounded-4xl shadow-lg p-6 bg-gradient-to-tl text-neutral-300 from-zinc-800 to-neutral-950 border-zinc-700">
//       <h2 className="text-xl font-bold">{ngo.name || 'N/A'}</h2>
//       <p className="text-md">Official: {ngo.official || 'N/A'}</p>
//       <p className="text-md">Headquarters: {ngo.headquarters || 'N/A'}</p>
//       <p className="text-md">Reach: {ngo.reach ? ngo.reach.toLocaleString() : 'N/A'}</p>
//       <a
//         href={ngo.link || '#'}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 hover:underline mt-2 inline-block"
//       >
//         Learn More
//       </a>
//     </div>
//   );
// }