// Error.jsx
import React from 'react';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-300">Oops! Something went wrong</h1>
        <p className="text-neutral-400 mt-4">The page you’re looking for doesn’t exist or an error occurred.</p>
        <p className="mt-6">
          <a href="/" className="text-blue-500 hover:underline text-lg">Go back to Home</a>
        </p>
      </div>
    </div>
  );
}