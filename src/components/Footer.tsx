import React from "react";

const Footer = () => {
	return (
		<footer className='w-full flex items-center justify-center bg-[#304D30] h-[15vh]'>
			<p className='text-[#B6C4B6] text-center'>
				Copyright &copy; {new Date().getFullYear()} OneShop
			</p>
		</footer>
	);
};

export default Footer;