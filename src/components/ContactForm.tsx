import React, { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ name, email, message });
  };
  
	return (
		<div className='w-full md:px-8 px-4 py-10 flex items-center justify-center flex-col' id="contact">
			<h1 className='text-[#304D30] text-center text-4xl font-bold'>
				Contact Us
			</h1>
			<p className='mb-8 opacity-50 text-center'>
				Always available to respond to your queries and provide details about
				your orders
			</p>

			<form className='flex flex-col sm:w-[70%] w-full' onSubmit={handleSubmit}>
				<label htmlFor='name'>Full Name</label>
				<input
					name='name'
					type='text'
					id='name'
					className='border-[1px] border-[#304D30] px-4 py-2 w-full rounded-sm mb-6'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor='email'>Email Address</label>
				<input
					name='email'
					type='email'
					id='email'
					className='border-[1px] border-[#304D30] px-4 py-2 w-full rounded-sm mb-6'
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor='message'>Message</label>
				<textarea
					name='message'
					id='message'
					className='border-[1px] border-[#304D30] px-4 py-2 w-full rounded-sm mb-6'
					rows={7}
					required
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					className='bg-[#304D30] text-white p-4 rounded-sm font-bold'
					type='submit'
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactForm;