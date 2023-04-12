import { LoadingImageText } from "@/components/Loading";
import ShowCodeJSX from "@/components/ShowCodeJSX";
import React, { useEffect, useState } from "react";
import ListPackage from "@/db/packages";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import GravatarImage from "@/components/GravatarImage";
import { GITHUB, NPM, YARN } from "../Socials/Socials";
import Link from "next/link";

export default function IconSidebar({ secondarySlug }) {
	const router = useRouter();

	const [loadingApi, setLoadingApi] = useState(true);

	const slug = secondarySlug || router.pathname.replace("/package/", "");

	const packageDataDb = ListPackage.filter(item => item.slug === slug)[0];

	const [packageData, setPackageData] = useState({});

	useEffect(() => {
		const apiUrl = `https://registry.npmjs.org/${slug}`;

		axios
			.get(apiUrl)
			.then(response => response.data)
			.then(data => {
				setPackageData(data);
				setLoadingApi(false);
			})
			.catch(error => console.log(error));
	}, []);

	return loadingApi ? (
		<LoadingImageText className="h-[516px]" />
	) : (
		<div className="flex flex-col gap-3 items-center sticky top-0">
			<Image
				width={packageDataDb.image.size.width}
				height={packageDataDb.image.size.height}
				src={packageDataDb.image.link}
				alt={packageDataDb.image.alt}
				className="w-full mx-2 rounded-lg shadow"
				priority
			/>

			<div className="w-full border rounded-lg p-3 shadow">
				<h1 className="text-primary text-base md:text-lg lg:text-xl">
					{packageDataDb.name}
				</h1>
			</div>

			<div className="w-full border rounded-lg p-3 shadow">
				<p className={"mb-2"}>Install</p>

				<ShowCodeJSX code={`npm i ${packageData["name"]}`} language={" bash"} />

				<p className="mt-2">
					<Link
						href={
							router.pathname.replace("/installation", "") + "/installation"
						}>
						Show more ...
					</Link>
				</p>
			</div>

			<div className="flex gap-3 items-center justify-between w-full border p-3 rounded-lg shadow">
				<span>Version {packageData["dist-tags"].latest}</span>

				<div className="flex flex-wrap gap-5 items-center">
					<GITHUB
						link={`${packageData["repository"].url.replace("git+", "")}`}
						title="Github"
					/>

					<NPM link={`https://www.npmjs.com/package/${slug}`} title="Npm" />

					<YARN link={`https://yarnpkg.com/package/${slug}`} title="yarn" />
				</div>
			</div>

			<div className="w-full border rounded-lg p-3 shadow">
				<p className={" mb-2"}>Collaborators</p>

				<ul className="flex flex-wrap gap-3">
					<li className="group/author relative">
						<a href={packageData["author"].url} target="_blank">
							<span className="hidden group-hover/author:flex items-center justify-center rounded absolute -bottom-6 right-1/2 translate-x-1/2 w-24 h-5 bg-secondary text-white text-xs">
								{packageData["author"].name}
							</span>
							<GravatarImage email={packageData["author"].email} />
						</a>
					</li>
					{packageData["contributors"] &&
						packageData["contributors"].map((contributor, index) => (
							<li key={index} className="group/contributor relative">
								<a href={contributor.url} target="_blank">
									<span className="hidden group-hover/contributor:flex items-center justify-center rounded absolute -bottom-6 right-1/2 translate-x-1/2 w-24 h-5 bg-secondary text-white text-xs">
										{contributor.name}
									</span>
									<GravatarImage email={contributor.email} />
								</a>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
