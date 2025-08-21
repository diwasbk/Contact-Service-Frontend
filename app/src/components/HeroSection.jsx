import React from 'react'

function HeroSection() {
  return (
        <section className="bg-[#0f172a] flex flex-col justify-center items-center text-center px-6 py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-[#38bdf8] mb-4">
                Hi, I'm Diwas
            </h1>
            <p className="text-gray-300 text-lg md:text-2xl max-w-2xl">
                I'm a passionate developer building modern web applications and exploring new technologies.
            </p>
        </section>
    );
}

export default HeroSection