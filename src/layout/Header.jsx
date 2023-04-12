import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "@/components/Header/HeaderMenu";
import React from "react";

const Header = () => {
	return (
		<header className="bg-secondary text-white border-b">
			<div className="container flex gap-5 items-center justify-between py-5">
				<Link href="/">
					<div className="flex gap-5 items-center justify-between ">
						<Image
							alt=""
							src="../zero-icons.svg"
							width={10}
							height={10}
							className="w-10"
						/>

						<p className="font-bold text-base lg:text-lg xl:text-xl inline">
							Zero Icons
						</p>
					</div>
				</Link>

				<HeaderMenu />
			</div>
		</header>
	);
};

export default Header;
