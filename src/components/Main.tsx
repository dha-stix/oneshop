import React from "react";
import { FaGaugeHigh, FaMoneyCheck } from "react-icons/fa6";
import { GiStrong, GiCommercialAirplane } from "react-icons/gi";
import { convertHTMLToText } from "../../util";

const Main = ({ content }: { content: any[] }) => {
	return (
		<main
			className='w-full md:px-8 px-4 py-10 flex items-center justify-center flex-col'
			id='about'
		>
			<h1 className='text-[#304D30] text-center text-4xl font-bold mb-14'>
				Why OneShop?
			</h1>
			<div className='flex items-center sm:flex-row flex-col sm:space-x-4 sm:mb-6  justify-center sm:w-[80%] w-full'>
				<div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
					<FaGaugeHigh className='text-3xl mb-4 text-[#304D30]' />
					<h2 className='text-[#304D30] text-xl font-bold'>
						{content[1].header}
					</h2>
					<p className='text-[#304D30]'>
						{convertHTMLToText(content[1].htmlValue)}
					</p>
				</div>
				<div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
					<GiStrong className='text-3xl mb-4 text-[#304D30]' />
					<h2 className='text-[#304D30] text-xl font-bold'>
						{content[2].header}
					</h2>
					<p className='text-[#304D30]'>
						{convertHTMLToText(content[2].htmlValue)}
					</p>
				</div>
			</div>

			<div className='flex items-center sm:flex-row flex-col sm:space-x-4 mb-6 justify-center sm:w-[80%] w-full'>
				<div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
					<FaMoneyCheck className='text-3xl mb-4 text-[#304D30]' />
					<h2 className='text-[#304D30] text-xl font-bold'>
						{content[3].header}
					</h2>
					<p className='text-[#304D30]'>
						{convertHTMLToText(content[3].htmlValue)}
					</p>
				</div>
				<div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
					<GiCommercialAirplane className='text-3xl mb-4 text-[#304D30]' />
					<h2 className='text-[#304D30] text-xl font-bold'>
						{content[4].header}
					</h2>
					<p className='text-[#304D30]'>
						{convertHTMLToText(content[4].htmlValue)}
					</p>
				</div>
			</div>
		</main>
	);
};

export default Main;