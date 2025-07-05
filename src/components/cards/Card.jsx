// Card.jsx
import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';
import countryData from '../../api/countryData.json';

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect
        items={countryData.map((country) => ({
          title: country.name?.common || 'N/A',
          description: `Capital: ${country.capital || 'N/A'}, Population: ${
            country.population ? country.population.toLocaleString() : 'N/A'
          }`,
          link: `https://en.wikipedia.org/wiki/${country.name?.common || ''}`,
          linkText: 'Learn More',
          target: '_blank',
          rel: 'noopener noreferrer',
        }))}
      />
    </div>
  );
}

export function Card({ country }) {
  return (
    <div className="flex flex-col items-start justify-center gap-3 border rounded-4xl shadow-lg p-6 bg-gradient-to-tl text-neutral-300 from-zinc-800 to-neutral-950 border-zinc-700">
      <h2 className="text-xl font-bold">{country.name?.common || 'N/A'}</h2>
      <p className="text-md">Capital: {country.capital || 'N/A'}</p>
      <p className="text-md">Population: {country.population ? country.population.toLocaleString() : 'N/A'}</p>
      <a
        href={`https://en.wikipedia.org/wiki/${country.name?.common || ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}