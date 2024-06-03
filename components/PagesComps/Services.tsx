import React from "react";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      href: '/',
      imgSrc: '/images/tk7.jpg',
      alt: 'Custom Furniture Design',
      title: 'Custom Furniture Design',
    },
    {
      href: '/',
      imgSrc: '/images/tk8.jpg',
      alt: '3D Modelling Services',
      title: '3D Modelling Services',
    },
    {
      href: '/',
      imgSrc: '/images/tk6.jpg',
      alt: 'Expert Craftsmanship',
      title: 'Expert Craftsmanship',
    },
    {
      href: '/',
      imgSrc: '/images/tk9.jpg',
      alt: 'Delivery & Installation',
      title: 'Delivery & Installation',
    },
  ];

  return (
    <div className='px-4 logo md:pt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 bg-black'>
      <div className='flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8'>
        <h2 className='max-w-lg mb-5 md:whitespace-nowrap text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group'>
          <span className='text-center md:text-left inline-block mb-1 sm:mb-4'>
            Exceptional Furniture Services
            <br className='hidden md:block' />
            Tailored for{" "}
            <span className='text-blue-800'>You</span>
          </span>
          <div className='h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100' />
        </h2>
        <p className='text-gray-300 px-4 md:text-sm md:max-w-md'>
          At TkFurnitures, we provide a range of high-quality furniture services, designed to meet your specific needs and preferences. Explore our offerings below.
        </p>
      </div>
      <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
        {services.map((service, index) => (
          <a href={service.href} aria-label={`View ${service.title}`} key={index}>
            <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
              <Image
                width={500}
                height={500}
                unoptimized
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={service.imgSrc}
                alt={service.alt}
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  {service.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className='text-center'>
        <a
          href='/'
          aria-label='See more'
          className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          See more
          <svg
            className='inline-block w-3 ml-2'
            fill='currentColor'
            viewBox='0 0 12 12'
          >
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Services;
