import React from 'react';

export default function Error() {

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Oops! Something went wrong</h1>
      <p className="mt-4">
      </p>
      <p className="mt-2">
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
      </p>
    </div>
  );
}