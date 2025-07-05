import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';

export default function Contact() {

  const handleForm = (formData) => {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
  }

  return (
    <>
      <section className="relative flex flex-col min-h-screen w-full md:py-0 px-5 md:px-0 bg-black items-center justify-center">
        <div className="flex flex-col items-center justify-center my-44 w-full max-w-lg p-3 md:p-8 bg-gradient-to-tl from-zinc-800 to-neutral-950 rounded-2xl border border-zinc-700">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-6">Get in Touch</h2>
          <form action={handleForm} className="flex flex-col gap-4 w-full relative z-10">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="username"
                placeholder="Enter your name"
                name="username"
                autoComplete="off"
                required
                className="border bg-neutral-950 border-zinc-700 rounded-2xl p-4 text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="useremail"
                placeholder="Enter your email"
                name="useremail"
                autoComplete="off"
                required
                className="border bg-neutral-950 border-zinc-700 rounded-2xl p-4 text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                autoComplete="off"
                required
                className="border bg-neutral-950 border-zinc-700 rounded-2xl p-4 text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 text-neutral-300 font-bold hover:bg-gradient-to-b hover:from-blue-600 hover:to-blue-800 hover:-translate-y-0.5 transition-colors transform duration-300 ease-in-out cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <BackgroundBeams />
    </>
  );
}