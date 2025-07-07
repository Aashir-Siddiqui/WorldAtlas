import React from 'react';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function CountryCards({ country }) {
    const { name, population, region, capital, flags } = country;

    return (
        <CardContainer className="inter-var w-full max-w-[20rem]">
            <CardBody className="relative group/card bg-gradient-to-tl from-zinc-800 to-neutral-950 border-zinc-700 border hover:shadow-lg hover:shadow-blue-500/[0.2] rounded-xl p-4 transition-all duration-300 hover:scale-105">
                <CardItem translateZ="80" className="w-full mt-2">
                    <img
                        src={flags?.svg || 'https://via.placeholder.com/300x200'}
                        alt={`${name?.common || 'Country'} flag`}
                        className="w-full h-32 object-cover rounded-lg"
                    />
                </CardItem>
                <div className="flex flex-col justify-between gap-2 mt-4">
                    <CardItem translateZ="40" className="text-neutral-300 flex flex-col items-start justify-center gap-1.5">
                        <h1 className="text-xl font-bold">
                            {name?.common && name.common.length > 20 ? name.common.slice(0, 20) + "..." : name?.common || 'N/A'}
                        </h1>
                        <p className="text-xs">Official: {name?.official && name.official.length > 30 ? name.official.slice(0, 20) + "..." : name?.official || 'N/A'}</p>
                        <p className="text-xs">Capital: {capital?.[0] || 'N/A'}</p>
                        <p className="text-xs">Region: {region || 'N/A'}</p>
                        <p className="text-xs">Population: {population ? population.toLocaleString() : 'N/A'}</p>
                        <a
                            href={`https://en.wikipedia.org/wiki/${name?.common || ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 text-xs inline-block"
                        >
                            Learn More
                        </a>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}