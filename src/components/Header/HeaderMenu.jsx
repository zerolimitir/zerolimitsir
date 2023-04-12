import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MenuUser, RemoveThin } from "react-huge-icons/bulk";

const HeaderMenu = props => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleMenuHandler = () => {
		setToggleMenu(!toggleMenu);
	};

	const BaseUrl = "/package/";
	const router = useRouter();
	const menuSidebar = [
		{
			id: 1,
			name: "Home",
			link: "/",
		},
		{
			id: 1,
			name: "Packages",
			link: "/package",
		},
		{
			id: 2,
			name: "React Huge Icons",
			link: BaseUrl + "react-huge-icons",
		},
	];

	return (
		menuSidebar && (
			<>
				<div className="hidden gap-5 md:flex items-center justify-between">
					{menuSidebar.map(({ name, link, id }) => (
						<Link
							href={link}
							key={id}
							className={`${
								router.pathname == link
									? "text-primary"
									: "text-white"
							} text-base`}>
							{name}
						</Link>
					))}
				</div>

				<div className="flex md:hidden" onClick={toggleMenuHandler}>
					<MenuUser className="w-10 h-10 text-primary" />
				</div>

				<div
					className={`fixed inset-0 backdrop-blur-[2px] dark:bg-slate-900/80 z-[999] ${
						toggleMenu ? "flex" : "hidden"
					}`}>
					<div className="container p-5 relative flex justify-end">
						<div className="relative flex flex-col gap-5 bg-secondary p-3 w-[300px] h-[300px] rounded-lg">
							<div
								className="absolute top-2 right-2 text-primary"
								onClick={toggleMenuHandler}>
								<RemoveThin className=" w-10 h-10" />
							</div>

							<div className="flex flex-col gap-5">
								{menuSidebar.map(({ name, link, id }) => (
									<Link
										href={link}
										key={id}
										className={`${
											router.pathname == link
												? "text-primary"
												: "text-white"
										} text-base font-bold`}>
										{name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
};

export default HeaderMenu;
