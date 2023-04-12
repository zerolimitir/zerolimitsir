import React, { useEffect, useState } from "react";
import DbListIcons from "@/db/react-huge-icons";
import IconList from "@/components/iconList/IconList";
import IconSidebar from "@/components/iconList/IconSidebar";
import { LoadingDots } from "../Loading";
const ShowIcon = ({ listOfIcons }) => {
	const [modeIcons, setModeIcons] = useState(listOfIcons.outline);

	const [search, setSearch] = useState({
		query: "",
		isSearch: false,
	});

	const searchHandler = e => {
		setSearch({ ...search, isSearch: true });

		setTimeout(() => {
			setSearch({ ...search, query: e.target.value, isSearch: false });
		}, 1500);
	};

	const dataIconsHandler = e => {
		if (e.target.value === "Solid") setModeIcons(() => listOfIcons.solid);
		else if (e.target.value === "Bulk") setModeIcons(() => listOfIcons.bulk);
		else setModeIcons(() => listOfIcons.outline);
	};

	return (
		<div className="w-full flex flex-wrap flex-col-reverse lg:flex-row justify-between gap-3">
			<div className="w-full lg:w-[74%]">
				<div className="flex flex-wrap lg:flex-nowrap gap-3 items-center justify-between bg-secondary p-2 rounded-lg shadow mb-4 sticky top-0 z-50">
					<div className="w-full lg:w-[74%]">
						<input
							type="text"
							placeholder="Search icons ..."
							className="w-full p-2 border rounded-lg h-10 bg-secondary"
							onChange={searchHandler}
						/>
					</div>

					<div className="w-full lg:w-[24%] flex items-center justify-between border border-primary rounded-lg overflow-hidden h-10">
						<input
							type="radio"
							name="type"
							value="Bulk"
							id="Bulk"
							onChange={dataIconsHandler}
							className="appearance-none peer/bulk"
						/>
						<label
							htmlFor="Bulk"
							className="h-full py-1 text-primary text-xs bg-secondary peer-checked/bulk:bg-primary peer-checked/bulk:text-white cursor-pointer w-1/3 text-center leading-7">
							Bulk
						</label>

						<input
							type="radio"
							name="type"
							value="Solid"
							id="Solid"
							onChange={dataIconsHandler}
							className="appearance-none peer/Solid"
						/>
						<label
							htmlFor="Solid"
							className="h-full py-1 text-primary text-xs bg-secondary peer-checked/Solid:bg-primary peer-checked/Solid:text-white cursor-pointer w-1/3 text-center leading-7">
							Solid
						</label>

						<input
							type="radio"
							name="type"
							value="Outline"
							id="Outline"
							onChange={dataIconsHandler}
							className="appearance-none peer/Outline"
							defaultChecked={true}
						/>
						<label
							htmlFor="Outline"
							className="h-full py-1 text-primary text-xs bg-secondary peer-checked/Outline:bg-primary peer-checked/Outline:text-white cursor-pointer w-1/3 text-center leading-7">
							Outline
						</label>
					</div>
				</div>
				{search.isSearch ? (
					<div className="flex items-center justify-center">
						<LoadingDots/>
					</div>
				) : (
					<IconList
						search={search.query}
						DbListIcons={DbListIcons}
						modeIcons={modeIcons}
					/>
				)}
			</div>

			<div className="flex flex-col gap-3 w-full lg:w-[24%]">
				<IconSidebar />
			</div>
		</div>
	);
};
export default React.memo(ShowIcon);
