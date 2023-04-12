import Image from "next/image";
import ShowCodeJSX from "./ShowCodeJSX";
import TitleSection from "./TitleSection";
import { GITHUB, NPM, YARN } from "./Socials/Socials";
import IconSidebar from "@/components/iconList/IconSidebar";

export const Description = () => {
	return (
		<div className="flex flex-col gap-5">
			<h1 className="text-secondary text-base md:text-xl lg:text-2xl xl:text-3xl">
				Huge Icon
			</h1>

			<div className="flex flex-wrap gap-5 items-center">
				<Image
					width={90}
					height={23}
					src="https://img.shields.io/npm/v/react-huge-icons?color=blue&style=flat"
					alt=""
				/>
			</div>

			<div>
				<p>
					We are here to convert the Huge Icons package into a ReactJs package.
				</p>
			</div>

			<div className="flex flex-wrap gap-5 items-center">
				<YARN
					link="https://yarnpkg.com/package/react-huge-icons"
					title="yarn"
				/>

				<NPM
					link="https://www.npmjs.com/package/react-huge-icons"
					title="Npm"
				/>

				<GITHUB
					link="https://github.com/zero-icons/react-huge-icons"
					title="Github"
				/>
			</div>
		</div>
	);
};

export const Installation = () => {
	return (
		<>
			<TitleSection subTitle="Installation For npm" />

			<ShowCodeJSX code={`npm i react-huge-icons`} language="bash" />

			<TitleSection subTitle="Installation For Yarn" />

			<ShowCodeJSX code={`yarn add react-huge-icons`} language="bash" />
		</>
	);
};

export const Usage = () => {
	return (
		<>
			<TitleSection title="Usage" subTitle="Outline Icons" />

			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/outline";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>

			<TitleSection title="Usage" subTitle="Solid Icons" />

			<ShowCodeJSX
				code={`
import { Archive } from "react-huge-icons/solid";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
			`}
				language="bash"
			/>

			<TitleSection title="Change Size" />

			<ShowCodeJSX
				code={`
// with TailwindCss
<Archive className="w-12 h-12" />

// with Bootstrap
<Archive className="w-25 h-25" />

// with Css Inline in React
<Archive style={{fontSize: "10rem"}} />
			`}
				language="bash"
			/>
		</>
	);
};

const DocHugeIcon = () => {
	return (
		<div className="w-full flex flex-wrap flex-col-reverse lg:flex-row justify-between gap-3">
			<div className="w-full lg:w-[74%]">
				<Description />
				<Installation />
				<Usage />
			</div>
			<div className="flex flex-col gap-3 w-full lg:w-[24%]">
				<IconSidebar secondarySlug="react-huge-icons" />
			</div>
		</div>
	);
};

export default DocHugeIcon;
