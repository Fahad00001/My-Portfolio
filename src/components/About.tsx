import React from 'react';
import bannerImage from '../assets/iqbal-modified.png';

function About() {
  return (
    <div className="py-16 border w-full bg-gray-100">
      <h1 className="text-4xl underline font-bold text-center pb-16">About Me</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around gap-8">
        {/* Image container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover"
            src={bannerImage}
            alt="Fahad Iqbal"
          />
        </div>
        {/* Text section */}
        <div className="w-full md:w-1/2 px-4 md:px-8">
          <h1 className="text-3xl font-bold mb-4">Web Developer</h1>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor similique ex rerum provident eos odit sunt distinctio voluptate possimus sed?
          </p>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, tempore. Necessitatibus voluptates, modi quasi, expedita accusantium, incidunt numquam dolores optio inventore obcaecati reprehenderit labore magnam quaerat qui cupiditate minima tempora.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read More...</button>
        </div>
      </div>
    </div>
  );
}

export default About;
