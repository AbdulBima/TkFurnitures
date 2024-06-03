"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

const MobileNavbar = () => {
	const pathname = usePathname();

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: "100%" },
		show: { y: "0%", transition: { duration: 0.4 } },
	};

	const [isMenuOpen, setMenuOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<div className='fixed bg-black md:hidden z-50'>
			{isMenuOpen ? null : (<div className='navbar bg-black'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='white'
								onClick={toggleMenu}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='navbar-center'>
					<a
						className='logo btn btn-ghost text-white text-xl
					 '
						href='/'
					>
						TkFurnitures
					</a>
				</div>
				<div className='navbar-end'>
					{/* <button className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</button> */}
				</div>
			</div>)}

			{isMenuOpen ? (
				<div className='h-screen fixed bg-black text-white z-40 w-screen'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='white'
						width='40'
						height='40'
						className='absolute top-8 right-8'
						onClick={toggleMenu}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>

					<div className='bg-black logo text-white h-screen overflow-hidden '>
						<motion.ul
							className='space-y-1 ml-10 pt-32'
							aria-label='Sidebar'
							variants={container}
							initial='hidden'
							animate='show'
						>
							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											HOME
										</span>
									</Link>
								</motion.li>
							</div>

							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/gallery'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/gallery"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											gallery
										</span>
									</Link>
								</motion.li>
							</div>

							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/services'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/services"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											services
										</span>
									</Link>
								</motion.li>
							</div>

							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/about'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/about"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											about
										</span>
									</Link>
								</motion.li>
							</div>

							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/team'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/team"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											team
										</span>
									</Link>
								</motion.li>
							</div>

							<div className='overflow-hidden'>
								<motion.li
									variants={item}
									className='text-white flex items-center px-3 py-2 '
								>
									<Link href='/contact'>
										<span
											className={cn(
												"truncate   text-2xl font-bold uppercase",
												pathname ===
													"/contact"
													? "decoration-blue-500 line-through decoration-4"
													: ""
											)}
											onClick={() => {
												closeMenu();
											}}
										>
											contact
										</span>
									</Link>
								</motion.li>
							</div>

					
						</motion.ul>

						<div className='w-full flex items-center py-4 mt-20 ml-12'>
							<a
								href='mailto:tk@gmail.com'
								className='mx-2 text-4xl text-white -mt-1.5 font-normal hover:opacity-90'
							>
								@
							</a>
							<a
								href='https://twitter.com/BellinghamJude'
								className='mx-2'
							>
								<svg
									className='w-6 h-6 fill-current text-white'
									viewBox='0 0 24 24'
								>
									<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'></path>
								</svg>
							</a>
							<a
								href='https://www.instagram.com/judebellingham/?hl=en'
								className='mx-2'
							>
								<svg
									className='w-6 h-6 fill-current text-white'
									viewBox='0 0 24 24'
								>
									<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default MobileNavbar;
