import React from "react";
import Image from "next/image";

const Team = () => {
	return (
		<div className='px-4 py-16 logo mx-auto sm:max-w-xl md:max-w-full  md:px-24  md:pt-20 md:pb-40 bg-black'>
			<div className='mx-auto mb-10 md:max-w-xl text-center'>
				<p className='inline-block px-3 py-px mb-4 text-3xl text-center font-semibold tracking-wider text-blue-600  rounded-full bg-teal-accent-400'>
					Discover Our Team
				</p>
				<p className='text-lg text-center  text-gray-200 md:text-lg'>
					Meet the dedicated team behind our
					exceptional furniture craftsmanship and
					design.
				</p>
			</div>
			<div className='grid gap-10 mx-auto px-8 md:px-0 md:grid-cols-4 md:max-w-screen-lg'>
				<div>
					<div className='relative pb-56 mb-4 rounded shadow md:pb-64'>
						<Image
							width={500}
							height={500}
							unoptimized
							className='absolute object-cover w-full h-full rounded'
							src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt='Person'
						/>
					</div>
					<div className='flex flex-col text-center'>
						<p className='text-lg font-normal text-white'>
							Tukur Mariga
						</p>
						<p className='mb-5 text-xs text-gray-400'>
							CEO
						</p>
						<div className='flex items-center space-x-3 sm:justify-center'>
							<a
								href='/'
								className='text-gray-500 mx-auto transition-colors duration-300 hover:text-deep-purple-accent-400'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-5'
								>
									<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className='relative pb-56 mb-4 rounded shadow md:pb-64'>
						<Image
							width={500}
							height={500}
							unoptimized
							className='absolute object-cover w-full h-full rounded'
							src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt='Person'
						/>
					</div>
					<div className='flex flex-col text-center'>
						<p className='text-lg font-normal text-white'>
							Sanusi Musa
						</p>
						<p className='mb-5 text-xs text-gray-400'>
							Design Team Lead
						</p>
						<div className='flex items-center space-x-3 sm:justify-center'>
							<a
								href='/'
								className='text-gray-500 mx-auto transition-colors duration-300 hover:text-deep-purple-accent-400'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-5'
								>
									<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className='relative pb-56 mb-4 rounded shadow md:pb-64'>
						<Image
							width={500}
							height={500}
							unoptimized
							className='absolute object-cover w-full h-full rounded'
							src='https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
							alt='Person'
						/>
					</div>
					<div className='flex flex-col text-center'>
						<p className='text-lg font-normal text-white'>
							Faisal Kashim
						</p>
						<p className='mb-5 text-xs text-gray-400'>
							Interior Designer
						</p>
						<div className='flex items-center space-x-3 sm:justify-center'>
							<a
								href='/'
								className='text-gray-500 mx-auto transition-colors duration-300 hover:text-deep-purple-accent-400'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-5'
								>
									<path d='M19.6,0H4.4C2,0,0,2,0,4.4v15.2C0,22,2,24,4.4,24h15.2c2.4,0,4.4-2,4.4-4.4V4.4C24,2,22,0,19.6,0z M22,19.6 c0,1.3-1.1,2.4-2.4,2.4H4.4C3.1,22,2,20.9,2,19.6V4.4C2,3.1,3.1,2,4.4,2h15.2C20.9,2,22,3.1,22,4.4V19.6z' />
									<circle
										cx='18.2'
										cy='5.8'
										r='1.4'
									/>
									<path d='M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16.2c-2.3,0-4.2-1.9-4.2-4.2 s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S14.3,16.2,12,16.2z' />
									<path d='M12,7.8c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S14.3,7.8,12,7.8z M12,15.2c-1.7,0-3.2-1.4-3.2-3.2 S10.3,8.8,12,8.8s3.2,1.4,3.2,3.2S13.7,15.2,12,15.2z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div>
					<div className='relative pb-56 mb-4 rounded shadow md:pb-64'>
						<Image
							width={500}
							height={500}
							unoptimized
							className='absolute object-cover w-full h-full rounded'
							src='https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
							alt='Person'
						/>
					</div>
					<div className='flex flex-col text-center'>
						<p className='text-lg font-normal text-white'>
							Isa Isa
						</p>
						<p className='mb-5 text-xs text-gray-400'>
							Customer Relations
						</p>
						<div className='flex items-center space-x-3 sm:justify-center'>
							<a
								href='/'
								className='text-gray-500 mx-auto flex flex-row space-x-4 transition-colors duration-300 hover:text-deep-purple-accent-400'
							>
								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-5'
								>
									<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
								</svg>

								<svg
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-5'
								>
									<path d='M19.6,0H4.4C2,0,0,2,0,4.4v15.2C0,22,2,24,4.4,24h15.2c2.4,0,4.4-2,4.4-4.4V4.4C24,2,22,0,19.6,0z M22,19.6 c0,1.3-1.1,2.4-2.4,2.4H4.4C3.1,22,2,20.9,2,19.6V4.4C2,3.1,3.1,2,4.4,2h15.2C20.9,2,22,3.1,22,4.4V19.6z' />
									<circle
										cx='18.2'
										cy='5.8'
										r='1.4'
									/>
									<path d='M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,16.2c-2.3,0-4.2-1.9-4.2-4.2 s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S14.3,16.2,12,16.2z' />
									<path d='M12,7.8c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S14.3,7.8,12,7.8z M12,15.2c-1.7,0-3.2-1.4-3.2-3.2 S10.3,8.8,12,8.8s3.2,1.4,3.2,3.2S13.7,15.2,12,15.2z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
