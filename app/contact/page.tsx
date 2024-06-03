import Image from "next/image";
import React from "react";

const ContactPage = () => {
	return (
		<section className='relative logo bg-black text-white'>
			<div className='py-16 md:py-24 lg:py-32'>
				<div className='mx-auto w-full max-w-3xl px-5 md:px-10'>
					<h2 className='text-3xl font-semibold md:text-5xl'>
						<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')] bg-contain bg-center bg-no-repeat px-4 text-white">
							Let&apos;s Build
						</span>{" "}
						Something Exciting Together
					</h2>
					<p className='mx-auto mb-8 mt-4 max-w-[528px] text-gray-400 md:mb-12 lg:mb-16'></p>

					<form
						method='get'
						className='mb-4 rounded-3xl border border-solid border-white bg-white px-4 py-10 text-black shadow-lg sm:px-8 sm:py-16 md:px-20'
					>
						<div className='mb-4 grid w-full grid-cols-2 gap-6'>
							<div className='relative'>
								<label className='mb-1 font-semibold'>
									First Name
								</label>
								<input
									type='text'
									className='block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-black focus:border-[#3898ec] focus:outline-0'
								/>
							</div>
							<div className='relative'>
								<label className='mb-1 font-medium'>
									Last Name
								</label>
								<input
									type='text'
									className='block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-black focus:border-[#3898ec] focus:outline-0'
								/>
							</div>
						</div>

						<div className='relative mb-4'>
							<label
								htmlFor='field'
								className='mb-1 font-medium'
							>
								Email
							</label>
							<input
								type='text'
								className='block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-black focus:border-[#3898ec] focus:outline-0'
								name='field'
							/>
						</div>

						<div className='relative mb-5 md:mb-6 lg:mb-8'>
							<label
								htmlFor='field'
								className='mb-1 font-medium'
							>
								Message
							</label>
							<textarea
								placeholder=''
								maxLength={5000}
								name='field'
								className='min-h-[186px] w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-black focus:border-[#3898ec] focus:outline-0'
							></textarea>
						</div>
						<label className='flex pb-4 pl-5 font-medium'>
							<input
								type='checkbox'
								name='checkbox-2'
								className='float-left -ml-[20px] mt-1'
							/>
							<span className='ml-4 inline-block cursor-pointer text-sm font-normal'>
								By selecting this, you agree
								to the
								<a
									href='#'
									className='font-bold text-blue-500'
								>
									{" "}
									Privacy Policy
								</a>
							</span>
						</label>
						<input
							type='submit'
							value='Submit'
							className='inline-block w-full cursor-pointer rounded-xl bg-blue-500 px-8 py-4 text-center font-semibold text-white shadow-lg hover:bg-blue-600'
						/>
					</form>
				</div>
			</div>
			{/* Background Image s */}
			<Image
				width={500}
				height={500}
				unoptimized
				src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg'
				alt=''
				className='absolute bottom-auto left-0 right-0 top-0 -z-10 inline-block w-full'
			/>
			<Image
				width={500}
				height={500}
				unoptimized
				src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639976df71dd20857114e6dd_Frame%20427322429.svg'
				alt=''
				className='absolute bottom-0 left-0 right-0 top-auto -z-30 inline-block w-full'
			/>
			<Image
				width={500}
				height={500}
				unoptimized
				src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg'
				alt=''
				className='absolute bottom-0 left-[5%] right-auto top-auto -z-30 hidden md:inline-block'
			/>
			<Image
				width={500}
				height={500}
				unoptimized
				src='https://assets.website-files.com/63904f663019b0d8edf8d57c/639976de093252d906117e82_Ornament%2049.svg'
				alt=''
				className='absolute bottom-auto left-auto right-[5%] top-0 -z-30 hidden md:inline-block'
			/>
		</section>
	);
};

export default ContactPage;
