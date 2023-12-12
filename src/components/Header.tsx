import React from "react";
import Image from "next/image";
import header from "../images/header.jpg";
import { Link as ScrollLink} from "react-scroll";

const Header = () => {
	return (
		<header className='w-full md:h-screen min-h-screen bg-[#EEF0E5]  flex items-center justify-between'>
			<div className='md:w-[65%] w-full  h-full bg-[#EEF0E5] md:p-8 p-4'>
				<nav className='h-[10vh] flex items-center justify-between mb-8'>
					<h2 className='text-2xl font-bold'>OneShop</h2>
					<div className='flex items-center space-x-5'>
						<ScrollLink to="about" className="hover:text-black hover:font-semibold text-[#304D30] cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink>
						<ScrollLink to="shop" className="hover:text-black hover:font-semibold text-[#304D30] cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Shop</ScrollLink>
                    <ScrollLink to="contact" className="hover:text-black hover:font-semibold text-[#304D30] cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</ScrollLink>
					</div>
				</nav>

				<section className='h-[90vh] flex flex-col justify-center px-2'>
					<h1 className='text-5xl font-extrabold mb-4'>
						Unleash Your Style with Premium Plain Tees
					</h1>
					<p className='mb-2 opacity-50'>
						Discover a world where simplicity meets sophistication. Our curated
						collection of basic tees transcends the ordinary, offering you a
						canvas to express your unique identity.{" "}
					</p>
					<p className='mb-2 opacity-50'>
						Whether you prefer a classic crew neck or a stylish V-neck, our
						versatile range is designed to seamlessly integrate into your
						wardrobe, providing the perfect foundation for any outfit.{" "}
					</p>
					<button className='bg-[#B6C4B6] hover:bg-[#163020] text-[#163020] cursor-pointer hover:text-white px-4 w-[200px] py-4 rounded-md my-4 block'>
						Shop Now
					</button>
				</section>
			</div>
			<div className='h-full max-w-[35%] md:flex hidden'>
				<Image src={header} alt='OnePlus Clothings' className='h-full w-auto' />
			</div>
		</header>
	);
};

export default Header;