import React from "react";

const About = () => {
	return (
		<>
			<div className="hidden logo overflow-x-hidden md:flex w-[100vw] h-[50vh] bg-cover bg-center bg-[url('/images/tk7.jpg')]">
				{/* <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent"></div> */}
				{/* <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent"></div> */}
			</div>
			<article className='w-[100vw] overflow-x-hidden md:px-40 logo px-6 py-24 mx-auto space-y-16 bg-black text-white'>
				<div className='w-full mx-auto flex flex-col space-y-4'>
					<h1 className='text-5xl -ml-2 font-bold mt-5 md:mt-0'>
						About Us
					</h1>
				</div>
				<div>
					<p className='blogPageTitle'>
						Welcome to TkFurnitures, your go-to
						source for premium furniture
						solutions. At TkFurnitures, we are
						committed to delivering
						high-quality, stylish, and
						functional furniture that meets the
						diverse needs of our clients.
						<br />
						<br />
						<span className='font-bold'>
							Our Mission:
						</span>
						<br />
						<br />
						Our mission is to enhance your
						living and working spaces with
						furniture that combines comfort,
						durability, and elegance. Through
						innovative designs and superior
						craftsmanship, we aim to be your
						trusted partner in creating
						beautiful and practical
						environments.
						<br />
						<br />
						<span className='font-bold'>
							What Sets Us Apart:
						</span>
						<br />
						<br />-{" "}
						<span className='font-bold'>
							Quality Craftsmanship:
						</span>{" "}
						Our furniture is crafted with
						precision and care, ensuring that
						every piece meets the highest
						standards of quality and durability.
						<br />-{" "}
						<span className='font-bold'>
							Innovative Designs:
						</span>{" "}
						We offer a wide range of modern and
						classic designs to suit any taste
						and decor. Our collection is
						constantly updated to reflect the
						latest trends and innovations in
						furniture design.
						<br />-{" "}
						<span className='font-bold'>
							Customer Focus:
						</span>{" "}
						Your satisfaction is our top
						priority. We provide personalized
						service and support to help you find
						the perfect furniture solutions for
						your home or office.
						<br />
						<br />
						<span className='font-bold'>
							Our Team:
						</span>
						<br />
						<br />
						TkFurnitures is powered by a
						dedicated team of designers,
						craftsmen, and customer service
						professionals who are passionate
						about delivering exceptional
						furniture and service. Our team is
						committed to upholding the highest
						standards of quality, transparency,
						and integrity in everything we do.
						<br />
						<br />
						<span className='font-bold'>
							Engage With Us:
						</span>
						<br />
						<br />
						We value the input and feedback of
						our customers. Connect with us on
						social media, share your thoughts on
						our products, and let us know the
						topics that matter most to you.
						TkFurnitures is not just a furniture
						store; it&apos;s a community of
						engaged individuals shaping the way
						we live and work together.
						<br />
						<br />
						<span className='font-bold'>
							Contact Us:
						</span>
						<br />
						<br />
						Have a question, suggestion, or
						inquiry? We welcome your
						communication. Reach out to our team
						at [support@tkfurnitures.com] or
						visit our Contact Us page for more
						ways to connect.
						<br />
						<br />
						Thank you for choosing TkFurnitures
						as your trusted source for quality
						furniture. We look forward to
						helping you create beautiful,
						comfortable, and functional spaces.
					</p>
				</div>
			</article>
		</>
	);
};

export default About;
