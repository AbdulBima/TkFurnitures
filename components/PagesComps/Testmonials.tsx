import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
	const testimonials = [
		{
			name: "Bilkis Arfat",
			role: "Homeowner",
			testimonial:
				"“The quality of the furniture is outstanding. The craftsmanship is top-notch, and the pieces have added a touch of elegance to my home.",
		},
		{
			name: "Zainab Binan",
			role: "Interior Designer",
			testimonial:
				"“I always recommend this furniture store to my clients. Their selection is vast, and the customer service is excellent. It makes my job so much easier!",
		},
		{
			name: "Ndagi Musa",
			role: "Business Owner",
			testimonial:
				"“Our office looks incredible thanks to the beautiful and functional furniture we purchased here. It has truly transformed our workspace.",
		},
	];

	return (
		<section className="relative logo bg-black md:px-20 pb-32 text-white">
			<div className="mx-auto max-w-full px-5 pt-20 md:px-32 md:pt-32">
				{/* Container */}
				<div className="mx-auto w-full max-w-3xl">
					{/* Component */}
					<div className="text-center">
						<h2 className="text-3xl font-semibold md:text-5xl">
							What
							<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')] bg-contain bg-center bg-no-repeat px-4 text-white">
								Our Clients
							</span>
							Are Saying
						</h2>
						<div className="mx-auto mb-8 mt-4 max-w-[528px]">
							<p className="text-[#aaaaaa]">
								Discover what our valued customers have to say about our
								high-quality furniture and exceptional service.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-8 lg:mb-16">
				{testimonials.map((client, index) => (
					<div
						key={index}
						className="relative mb-4 flex flex-col items-center justify-between gap-6 md:rounded-xl w-[90vw] md:w-auto border border-solid border-[#aaaaaa] bg-white text-black px-4 text-center pb-4 pt-8 max-[767px]:mt-4 md:mb-8 md:px-6 md:pb-8 md:pt-8 lg:mb-4"
					>
						<div className="mb-4 flex flex-col items-center">
							<h6 className="text-base font-semibold">{client.name}</h6>
							<p className="text-sm text-[#aaaaaa]">{client.role}</p>
						</div>
						<p className="mb-4 text-[#aaaaaa]">{client.testimonial}</p>
						<div className="flex">
							{[...Array(5)].map((_, starIndex) => (
								<Image
									key={starIndex}
									width={500}
									height={500}
									unoptimized
									src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
									alt="Star"
									className="mr-1 inline-block w-3.5 flex-none"
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col items-center justify-center">
				<a
					href="mailto:tk@gmail.com"
					className="inline-block rounded-xl bg-white px-8 py-4 text-center font-semibold text-blue-600 hover:opacity-85 hover:scale-90 [box-shadow:rgb(19,_83,_254)_6px_6px]"
				>
					Get in Touch
				</a>
			</div>
			<Image
				width={500}
				height={500}
				unoptimized
				src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg"
				alt=""
				className="absolute bottom-[auto] left-[auto] right-[0%] top-[0%] -z-10 inline-block max-[767px]:hidden"
			/>
		</section>
	);
};

export default Testimonials;
