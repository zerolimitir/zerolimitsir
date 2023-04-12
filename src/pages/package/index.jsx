import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ListPackage from "@/db/packages";
import { useState } from "react";

export default function Package() {
	const [repoData, setRepoData] = useState([]);

	return (
		<>
			<Head>
				<title>Zero Icons Packages</title>
				<meta name="description" content="All package Zero Icons" />
			</Head>

			<div className={"flex flex-col gap-10"}>
				<div className="flex flex-col gap-5">
					<h1 className="text-secondary text-base md:text-xl lg:text-2xl xl:text-3xl">
						A list of Zero Icons packages
					</h1>
				</div>

				<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
					{ListPackage.map(
						({ id, status, version, name, image, link }) =>
							status && (
								<div className={"border rounded-lg overflow-hidden"} key={id}>
									<Image
										width={image.size.width}
										height={image.size.height}
										src={image.link}
										alt={image.alt}
										className={"w-full"}
									/>

									<div className="flex flex-col gap-3 p-3">
										<Link
											href={link}
											className={"font-bold text-sm lg:text-base xl:text-lg"}>
											{name}
										</Link>
									</div>
								</div>
							),
					)}
				</div>
			</div>
		</>
	);
}
