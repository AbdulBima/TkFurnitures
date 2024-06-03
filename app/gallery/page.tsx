import React from "react";
import Image from "next/image";

const GalleryPage = () => {
	return (
		<section className='pt-20 logo pb-40 bg-black px-4 md:px-20'>
			<div className='text-center mb-10'>
				<h2 className='text-3xl font-bold text-blue-500 '>
					Gallery
				</h2>
				<p className='text-base text-white md:text-lg'>
					Explore our collection of beautifully
					crafted furniture pieces.
				</p>
			</div>
			<div className='container grid grid-cols-2 gap-4 p-te4 mx-auto md:grid-cols-4'>
				<Image
					width={500}
					height={500}
					unoptimized
					src='/images/tk1.jpg'
					alt=''
					className='w-full h-full col-span-2 row-span-2 rounded shadow-sm object-cover min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk1.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk3.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk4.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk5.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk6.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk7.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk8.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					alt=''
					className='w-full h-full rounded shadow-sm object-cover min-h-48 dark:bg-gray-500 aspect-square'
					src='/images/tk9.jpg'
				/>
				<Image
					width={500}
					height={500}
					unoptimized
					src='/images/tk6.jpg'
					alt=''
					className='w-full h-full col-span-2 row-span-2 rounded shadow-sm object-cover min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square'
				/>
			</div>
		</section>
	);
};

export default GalleryPage;
