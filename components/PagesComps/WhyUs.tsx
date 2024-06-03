import React from "react";
import Image from "next/image";

const WhyUs: React.FC = () => {
	const features = [
		"Custom Designs",
		"High-Quality Materials",
		"Expert Craftsmanship",
		"Personalized Service",
		"Sustainable Practices",
		"Innovative Designs",
	];

	return (
		<div className="px-4 logo py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 md:py-20 bg-black">
			<div className="grid gap-5 row-gap-20 lg:grid-cols-2">
				<div className="flex flex-col justify-center">
					<div className="max-w-xl mb-6">
						<h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
							Why Choose TkFurnitures?
							<br className="hidden md:block" />
							<span className="relative px-1">
								<div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
								<span className="relative inline-block text-blue-900">
									Exceptional Quality
								</span>
							</span>
						</h2>
						<p className="text-base text-gray-300 md:text-lg">
							At TkFurnitures, we pride ourselves on delivering the highest quality custom furniture tailored to your unique style and needs. Here&apos;s why we stand out:
						</p>
					</div>
					<p className="mb-4 text-sm font-bold tracking-widest uppercase text-blue-900">
						Features
					</p>
					<div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
						{features.map((feature, index) => (
							<div key={index} className="flex items-center space-x-2 text-white">
								<svg
									className="w-5 h-5 text-blue-900"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
								<span>{feature}</span>
							</div>
						))}
					</div>
				</div>
				<div>
					<Image
						width={500}
						height={500}
						unoptimized
						className="hidden md:flex object-cover w-full h-56 rounded shadow-lg sm:h-96"
						src="/images/tk2.jpg"
						alt="Custom Furniture"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
