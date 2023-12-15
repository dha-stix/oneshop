import React from "react";
import { convertHTMLToText } from "../../util";

const Footer = ({ content }: { content: string }) => {
	return (
		<footer className='w-full flex items-center justify-center bg-[#304D30] h-[15vh]'>
			<p className='text-[#B6C4B6] text-center'>{convertHTMLToText(content)}</p>
		</footer>
	);
};

export default Footer;