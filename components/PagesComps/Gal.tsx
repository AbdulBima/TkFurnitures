import React from "react";
import Image from "next/image";

const images = [
  { src: '/images/tk7.jpg', alt: 'Gallery image 1' },
  { src: '/images/tk3.jpg', alt: 'Gallery image 2' },
  { src: '/images/tk4.jpg', alt: 'Gallery image 3' },
  { src: '/images/tk8.jpg', alt: 'Gallery image 4' }
];

const Gallery = () => {
  return (
    <div className='px-4 logo pt-12 pb-16 mx-auto sm:max-w-xl md:px-20 md:max-w-screen-xl md:py-20'>
      <header className='text-center mb-10'>
        <h2 className='text-3xl font-bold text-blue-600 sm:text-4xl'>Gallery</h2>
        <p className='text-lg text-white md:text-lg'>
          Explore our collection of beautifully crafted furniture pieces.
        </p>
      </header>
      
      <section className='grid grid-cols-2 gap-6'>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={500}
              height={500}
              unoptimized
              className='h-auto max-w-full rounded-lg'
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </section>

      <a
        href='/gallery'
        className='flex flex-row w-60 mx-auto mt-20 items-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] shadow-[6px_6px_rgb(19,83,254)] hover:opacity-85 hover:scale-90'
      >
        <Image
          width={24}
          height={24}
          unoptimized
          src='https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg'
          alt='Play Icon'
          className='mr-2 inline-block'
        />
        <p>View Gallery</p>
      </a>
    </div>
  );
};

export default Gallery;
