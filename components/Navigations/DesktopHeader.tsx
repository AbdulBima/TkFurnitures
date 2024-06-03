"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Assuming you are using Next.js

const DesktopHeader: React.FC = () => {
	const pathname = usePathname();

	const getLinkClass = (path: string) =>
		pathname === path
			? "font-medium tracking-wide text-sm text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 underline underline-offset-4 decoration-4 decoration-blue-600"
			: "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400";

	const menuItems = [
		{ path: "/", label: "Home" },
		{ path: "/gallery", label: "Gallery" },
		{ path: "/services", label: "Services" },
		{ path: "/about", label: "About" },
		{ path: "/team", label: "Team" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<section>
			<div className="bg-black logo hidden md:block">
				<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between">
						<a
							href="/"
							aria-label="Company"
							title="Company"
							className="inline-flex items-center"
						>
							<span className="ml-2 logo text-2xl font-bold tracking-wide text-white">
								TkFurnitures
							</span>
						</a>
						<ul className="flex items-center text-sm space-x-8 lg:flex">
							{menuItems.map((item) => (
								<li key={item.path}>
									<a
										href={item.path}
										aria-label={item.label}
										title={item.label}
										className={getLinkClass(item.path)}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesktopHeader;
