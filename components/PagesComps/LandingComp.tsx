import Image from "next/image";
import React from "react";

const LandingComp = () => (
  <div className="relative bg-center bg-cover bg-[url('/images/tk4.jpg')] w-full h-auto">
    {/* Gradient Overlays */}
    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90'></div>
    <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent'></div>
    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>

    {/* Container */}
    <div className='relative logo mx-auto flex w-full max-w-[1120px] flex-col items-start px-5 py-16 md:px-10 md:py-24 lg:py-32'>
      {/* Heading Section */}
      <div className='lg:max-w-[80%]'>
        <h1 className='mb-5 text-2xl font-semibold text-white md:text-6xl lg:mb-8'>
          Quality Furniture for Every Home from{" "}
          <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
            TkFurnitures
          </span>
          .
        </h1>
        <p className='mb-5 max-w-[528px] text-lg text-[#ffffffb3] lg:mb-8'>
          Discover a wide range of beautifully crafted furniture that brings comfort and style to your home, sourced locally and sustainably in Nigeria.
        </p>
      </div>

      {/* Button Section */}
      <div className='flex'>
        <a
          href='/services'
          className='mr-5 inline-block rounded-xl bg-white px-8 py-4 text-center font-semibold text-black shadow-[6px_6px_rgb(19,83,254)] hover:opacity-85 hover:scale-90'
        >
          Services
        </a>
        <a
          href='/gallery'
          className='flex items-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] shadow-[6px_6px_rgb(19,83,254)] hover:opacity-85 hover:scale-90'
        >
          <Image
            width={24}
            height={24}
            unoptimized
            src='https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg'
            alt='Play Icon'
            className='mr-2'
          />
          Gallery
        </a>
      </div>

      {/* Image Showcase */}
      <a
        href='/gallery'
        className='relative bottom-0 left-auto right-0 top-auto mt-20 inline-block h-[480px] w-full font-bold text-[#1353fe] lg:absolute lg:h-64 lg:w-64 hover:opacity-85 hover:scale-95'
      >
        <Image
          width={500}
          height={500}
          unoptimized
          src='/images/tk3.jpg'
          alt='Furniture Showcase'
          className='relative inline-block h-full w-full -rotate-3 rounded-xl object-cover lg:-rotate-6'
        />
        <div className='absolute inset-0 z-10 h-full -rotate-6 rounded-xl bg-[#00000033] lg:-rotate-3'></div>
        <div className='absolute inset-0 -z-10 h-full rounded-2xl bg-black'></div>
        <Image
          width={24}
          height={24}
          unoptimized
          src='https://assets.website-files.com/63904f663019b0d8edf8d57c/63914ea79e127d1bd7939a6a_Play.svg'
          alt='Play Button'
          className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'
        />
      </a>
    </div>

    {/* Background Patterns */}
    <Image
      width={500}
      height={500}
      unoptimized
      src='https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg'
      alt='Pattern 1'
      className='absolute bottom-0 left-0 right-auto top-auto -z-10 md:bottom-1/2'
    />
    <Image
      width={500}
      height={500}
      unoptimized
      src='https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg'
      alt='Pattern 2'
      className='absolute bottom-auto left-auto right-0 top-0 -z-10 hidden max-[479px]:block'
    />
  </div>
);

export default LandingComp;
