import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row items-center justify-between p-4">
      <div className="order-2 md:order-1 text-center md:text-left flex-1 p-4 mt-8 md:mt-0">
        <span className="block text-sm md:text-base">Computer Science Student</span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Hi! My name is <br />
          <span className="text-3xl md:text-4xl lg:text-6xl underline underline-offset-8 decoration-red-800">
            Daniel Pedrosa Wu
          </span>
        </h1>
        <p className="text-base md:text-lg mt-4">
          A passionate and driven Computer Science student with a keen interest in technology. 
          As someone who is new to the field, I'm excited to dive into the world of Computer Science, 
          eager to hone my skills and make meaningful contributions to our ever-growing society.
        </p>
      </div>
      <div className="order-1 md:order-2 w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 flex justify-center items-center">
        <Image
          src="/assets/portrait.png"
          priority
          alt=""
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
