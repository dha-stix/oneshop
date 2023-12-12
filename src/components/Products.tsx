import React from "react";
import Image from "next/image";
import producta from "../images/producta.jpg";
import productb from "../images/productb.jpg";
import productc from "../images/productc.jpg";

const Products = () => {
	return (
		<section className='w-full md:px-8 px-4 py-10 flex items-center justify-center flex-col bg-[#EEF0E5]' id="shop">
			<h1 className='text-[#304D30] text-center text-4xl font-bold mb-14'>
				Latest Arrivals
			</h1>

			<div className='flex items-center sm:flex-row flex-col sm:space-x-4 sm:mb-6  justify-center sm:w-[90%] w-full'>
				<div className='sm:w-1/3 w-[80%] mb-4 sm:mb-0 bg-white p-6 rounded-lg'>
					<Image
						src={producta}
						alt='Product A'
						className='h-[250px] object-cover mb-4'
					/>
					<section className='w-full flex flex-col items-center justify-center'>
						<h3 className='text-lg text-[#163020] font-semibold'>
							Coloured T-shirt
						</h3>
						<p className='text-sm opacity-60 text-center mb-5'>
							Vibrant collection of colored t-shirts brings a burst of
							personality to your everyday look
						</p>
						<div className='flex items-center space-x-4'>
							<p className='text-lg font-bold text-[#304D30]'>$50</p>
							<button className='bg-[#304D30] text-white p-3 cursor-pointer rounded-md'>
								Buy Now
							</button>
						</div>
					</section>
				</div>
				<div className='sm:w-1/3 w-[80%]  mb-4 sm:mb-0 bg-white p-6 rounded-lg'>
					<Image
						src={productb}
						alt='Product B'
						className='h-[250px] object-cover mb-4'
					/>
					<section className='w-full flex flex-col items-center justify-center'>
						<h3 className='text-lg text-[#163020] font-semibold'>
							White T-shirt
						</h3>
						<p className='text-sm opacity-60 text-center mb-5'>
							Timeless plain white t-shirts, a wardrobe essential for
							unparalleled versatility and style.
						</p>
						<div className='flex items-center space-x-4'>
							<p className='text-lg font-bold text-[#304D30]'>$50</p>
							<button className='bg-[#304D30] text-white p-3 cursor-pointer rounded-md'>
								Buy Now
							</button>
						</div>
					</section>
				</div>

				<div className='sm:w-1/3 w-[80%]  mb-4 sm:mb-0 bg-white p-6 rounded-lg'>
					<Image
						src={productc}
						alt='Product C'
						className='h-[250px] object-cover mb-4'
					/>
					<section className='w-full flex flex-col items-center justify-center'>
						<h3 className='text-lg text-[#163020] font-semibold'>
							Cotton Hoodies
						</h3>
						<p className='text-sm opacity-60 text-center mb-5'>
							Wrap yourself in comfort and style with our cozy hoodies, perfect
							for staying warm.
						</p>
						<div className='flex items-center space-x-4'>
							<p className='text-lg font-bold text-[#304D30]'>$50</p>
							<button className='bg-[#304D30] text-white p-3 cursor-pointer rounded-md'>
								Buy Now
							</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Products;