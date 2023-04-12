import Header from "./Header";
import React from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const { asPath } = useRouter();
	const origin =
		typeof window !== "undefined" && window.location.origin
			? window.location.origin
			: "";

	const URL = `${origin}${asPath}`;
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/zerolimit.svg" />
				<meta name="theme-color" content="#0ea5e9" />
				<link rel="canonical" href={URL} />
			</Head>

			<Header />

			<main className="flex flex-col gap-5 py-5">
				<div className="container">{children}</div>
			</main>

			<Toaster position="bottom-center" reverseOrder={false} />
		</>
	);
};

export default Layout;
