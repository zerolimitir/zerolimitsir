import Header from "./Header";
import React from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/zerolimit.svg" />
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
