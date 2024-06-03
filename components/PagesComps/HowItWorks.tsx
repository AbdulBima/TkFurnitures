import React from "react";

const steps = [
  {
    number: 1,
    title: "Consultation",
    description: "Schedule a consultation with our design experts to discuss your vision and requirements for your space."
  },
  {
    number: 2,
    title: "Design & Customize",
    description: "Our team will create a customized design plan that reflects your style and meets your functional needs."
  },
  {
    number: 3,
    title: "Delivery & Installation",
    description: "We deliver and install your custom furniture, ensuring everything fits perfectly and meets your expectations."
  }
];

const HowItWorks = () => (
  <section className='relative bg-white'>
    <div className='logo mx-auto max-w-7xl py-16 px-10 md:px-32 md:py-24 lg:py-32'>
      <header className='mx-auto w-full max-w-3xl text-center'>
        <p className='uppercase text-[#1353fe]'>3 easy steps</p>
        <h2 className='text-3xl font-semibold capitalize md:text-5xl'>
          How it{" "}
          <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center bg-no-repeat px-4 text-white">
            works
          </span>
        </h2>
        <p className='mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16'>
          Follow these three steps to get started with our bespoke furniture design and installation services.
        </p>
      </header>
      
      <div className='grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12'>
        {steps.map((step) => (
          <div key={step.number} className='relative mt-8 md:mt-0 grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20 bg-white'>
            <div className='absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 shadow-md'>
              <p className='text-xl font-bold md:text-2xl'>{step.number}</p>
            </div>
            <p className='text-xl font-semibold'>{step.title}</p>
            <p className='text-sm text-[#636262]'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
