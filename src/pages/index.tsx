import Header from "@/components/Header";
import Main from "@/components/Main";
import Products from "@/components/Products";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Content {
	price: any;
	image_group: any;
	single_image: any;
	single_text: any;
	title_and_content: any;
}
export default function Home() {
	const [contents, setContents] = useState<Content>({
		price: {},
		image_group: {},
		single_image: {},
		single_text: {},
		title_and_content: {},
	});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getContents() {
			const request = await fetch("/api/data");
			const data = await request.json();
			setLoading(false);
			setContents(data.attributes);
		}
		getContents();
	}, []);

	return (
		<main>
			<Head>
				<title>Home | OneShop</title>
			</Head>
			{loading ? (
				<div className='w-full h-screen flex items-center justify-center'>
					<h3 className='text-2xl font-bold'>Loading</h3>
				</div>
			) : (
				<>
					<Header
						image={contents.single_image.value[0]}
						content={contents.title_and_content.value[0]}
					/>
					<Main content={contents.title_and_content.value} />
					<Products
						content={contents.title_and_content.value}
						images={contents.image_group.value}
					/>
					<ContactForm />
					<Footer content={contents.single_text.value[0].htmlValue} />
				</>
			)}
		</main>
	);
}