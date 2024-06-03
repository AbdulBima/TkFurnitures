import React from "react";
import Image from "next/image";

const ServicePage = () => {
	return (
		<section className='px-6 py-16 logo mx-auto  md:max-w-full md:px-20  lg:py-20 bg-black text-white'>
			<h2 className='text-2xl logo font-bold text-blue-500 text-center  pb-20 '>
				Our Services
			</h2>
			<div className='grid gap-20 space-y-10 row-gap-8 lg:grid-cols-2'>
				{/* First section with text on the left and image on the right */}
				<div className='flex flex-col justify-center order-1 lg:order-1'>
					<div className='max-w-xl mb-6'>
						<h2 className='max-w-lg mb-6  text-3xl font-bold tracking-tight text-white logo sm:leading-none'>
							Exceptional Furniture Services
							Tailored for{" "}
							<span className='inline-block text-black'>
								You
							</span>
						</h2>
						<p className='text-base text-gray-400 md:text-lg'>
							At TkFurnitures, we provide a
							range of high-quality furniture
							services, designed to meet your
							specific needs and preferences.
							Explore our offerings below.
						</p>
					</div>
					<div className='grid gap-8 row-gap-8 sm:grid-cols-2'>
						<div>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
								<svg
									className='w-10 h-10 text-black'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
							<h6 className='mb-2 font-semibold leading-5 text-white'>
								Custom Furniture Design
							</h6>
							<p className='text-sm text-gray-400'>
								Our team collaborates with
								you to design furniture that
								fits your space and style
								perfectly.
							</p>
						</div>
						<div>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
								<svg
									className='w-10 h-10 text-black'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
							<h6 className='mb-2 font-semibold leading-5 text-white'>
								3D Modelling Services
							</h6>
							<p className='text-sm text-gray-400'>
								Visualize your furniture
								with our detailed 3D models
								before they are brought to
								life.
							</p>
						</div>
					</div>
				</div>
				<div className='order-2 lg:order-2'>
					<Image
						width={500}
						height={500}
						unoptimized
						className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
						src='/images/tk5.jpg'
						alt='Custom Furniture Design'
					/>
				</div>

				{/* Second section with image on the left and text on the right */}
				<div className='order-4 lg:order-3'>
					<Image
						width={500}
						height={500}
						unoptimized
						className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
						src='/images/tk10.jpg'
						alt='Expert Craftsmanship'
					/>
				</div>
				<div className='flex flex-col justify-center order-3 lg:order-4'>
					<div className='max-w-xl mb-6'>
						<h2 className='max-w-lg mb-6  text-3xl font-bold tracking-tight text-white logo sm:leading-none'>
							Expert Craftsmanship
						</h2>
						<p className='text-base text-gray-400 md:text-lg'>
							Our skilled artisans use the
							finest materials and techniques
							to craft furniture that lasts.
						</p>
					</div>
					<div className='grid gap-8 row-gap-8 sm:grid-cols-2'>
						<div>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
								<svg
									className='w-10 h-10 text-black'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
							<h6 className='mb-2 font-semibold leading-5 text-white'>
								Delivery & Installation
							</h6>
							<p className='text-sm text-gray-400'>
								We ensure your furniture is
								delivered and installed with
								the utmost care and
								professionalism.
							</p>
						</div>
						<div>
							<div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
								<svg
									className='w-10 h-10 text-black'
									stroke='currentColor'
									viewBox='0 0 52 52'
								>
									<polygon
										strokeWidth='3'
										strokeLinecap='round'
										strokeLinejoin='round'
										fill='none'
										points='29 13 14 29 25 29 23 39 38 23 27 23'
									/>
								</svg>
							</div>
							<h6 className='mb-2 font-semibold leading-5 text-white'>
								Customer Support
							</h6>
							<p className='text-sm text-gray-400'>
								Our support team is always
								ready to assist you with any
								inquiries or issues.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicePage;
