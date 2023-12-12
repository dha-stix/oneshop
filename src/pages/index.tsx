import Header from "@/components/Header";
import Main from "@/components/Main";
import Products from "@/components/Products";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
	return (
		<main>
			<Head>
				<title>Home | OneShop</title>
			</Head>
			<Header />
			<Main />
			<Products/>
			<ContactForm />
			<Footer/>
		</main>
	);
}