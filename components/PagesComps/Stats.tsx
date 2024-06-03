import React from "react";

export const Stats = () => {
  return (
    <div className="px-4 logo py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d5589eeb-3fca-4f01-ac3e-983224745704"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{" "}
          the Best Furniture in Nigeria
        </h2>
        <p className="text-base text-gray-300 md:text-lg">
          Explore a wide range of beautifully crafted furniture that combines
          style, comfort, and sustainability, exclusively at TkFurnitures.
        </p>
      </div>
      <div className="relative w-full p-px mx-auto mb-4 overflow-hidden rounded-lg transition-shadow duration-300 lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
        <div className="relative grid grid-cols-2 border-0 mx-auto px-20 items-center w-[50vw] h-full py-10 duration-300 bg-white transition-color sm:items-stretch sm:flex-row">
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-black sm:text-5xl">95%</h6>
            <p className="text-center text-black md:text-base">
              Customer Satisfaction Rate
            </p>
          </div>
          <div className="px-12 py-8 text-center">
            <h6 className="text-4xl font-bold text-black sm:text-5xl">400+</h6>
            <p className="text-center text-black md:text-base">
              Happy Customers Nationwide
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-4 text-gray-400 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
        Join thousands of satisfied customers and experience the best in quality
        furniture at TkFurnitures. Your comfort is our priority.
      </p>
    </div>
  );
};
