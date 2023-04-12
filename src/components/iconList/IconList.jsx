import RandomColorIcons from "@/components/iconList/RandomColorIcons";
import React from "react";
import _ from "loadsh";

const IconList = ({ DbListIcons, modeIcons, search }) => {
	const iconValue = Object.values(modeIcons);
	const iconKey = Object.keys(modeIcons);

	return (
		DbListIcons &&
		DbListIcons.map(
			({
				id,
				statusShow,
				categoryName,
				packageVersion,
				listOfIcons,
				...props
			}) => {
				const filteredIcons =
					listOfIcons &&
					listOfIcons.filter(icon =>
						_.upperFirst(_.camelCase(icon))
							.toLowerCase()
							.includes(search.toLowerCase()),
					);
				return (
					statusShow && (
						<div key={id}>
							{filteredIcons.length > 0 && (
								<div className="py-6">
									<h3 className="text-white border-l-4 border-primary pl-2 font-bold text-base lg:text-lg xl:text-xl">
										{categoryName}{" "}
										<small className="text-xs font-normal opacity-70">
											{packageVersion}
										</small>
									</h3>
								</div>
							)}

							<ul className="list-none grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
								{filteredIcons &&
									filteredIcons.map((icon, index) => {
										const dataIcons = {
											name: _.upperFirst(_.camelCase(icon)),
											randomNum: Math.floor(Math.random() * 8),
										};
										dataIcons.component =
											iconValue[iconKey.indexOf(dataIcons.name)];

										return (
											<RandomColorIcons
												dataIcons={dataIcons}
												{...props}
												key={index}
											/>
										);
									})}
							</ul>
						</div>
					)
				);
			},
		)
	);
};
export default React.memo(IconList);
