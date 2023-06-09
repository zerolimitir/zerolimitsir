const SocialBox = ({ children, link, title }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="flex items-center justify-center bg-primary rounded w-8 h-8"
			title={title}>
			{children}
		</a>
	);
};

export const NPM = props => {
	return (
		<SocialBox {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 27.2 27.2"
				className="text-white w-6 h-6">
				<path
					fill="currentColor"
					d="M2,0h23.2c1.1,0,2,0.9,2,2v23.2c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z M5.8,21.8h7.9l0-11.8h3.9l0,11.8
h3.9l0-15.7L5.8,6L5.8,21.8z"
				/>
			</svg>
		</SocialBox>
	);
};

export const GITHUB = props => {
	return (
		<SocialBox {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				className="text-white w-6 h-6">
				<path
					fill="currentColor"
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/>
			</svg>
		</SocialBox>
	);
};

export const YARN = props => {
	return (
		<SocialBox {...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 583 339"
				className="text-white w-6 h-6">
				<path
					fill="currentColor"
					d="M147.6 115.8c-8 27.6-20.8 47.6-35.2 63.6V39c0-9.6-8.4-17.6-21.6-17.6-5.6 0-10.4 2.8-10.4 6.8C80.4 31 82 33.4 82 41v64.4c-4.8 28-16.8 54-32.8 54-11.6 0-18.4-11.6-18.4-33.2 0-33.6 4.4-51.2 11.6-80.8 1.6-6 13.2-22-6.4-22-21.2 0-18.4 8-21.2 14.8 0 0-14.4 47.6-14.4 90 0 34.8 15.6 57.6 42.4 57.6 17.2 0 29.6-11.6 39.2-27.6V209c-26.4 23.2-49.6 43.6-49.6 84 0 25.6 16 46 38.4 46 20.4 0 41.6-14.8 41.6-56.8V213c21.6-18.8 44.8-42.4 58.4-88.8.4-1.6.4-3.6.4-4 0-7.6-7.6-16.4-14-16.4-4 0-7.2 3.6-9.6 12zm-76.8 198c-6.4 0-10.4-9.6-10.4-22 0-24 8.8-39.2 21.6-52.4v42.8c0 7.6 1.6 31.6-11.2 31.6z"
				/>
				<path
					fill="currentColor"
					d="M262.4 159c-9.6 0-13.6-9.6-13.6-18.4v-66c0-9.6-8.4-17.6-21.6-17.6-5.6 0-10.4 2.8-10.4 6.8 0 2.8 1.6 5.2 1.6 12.8v61.6C214 149.4 206.8 159 196 159c-14 0-22.8-12-22.8-32.8 0-57.6 35.6-83.6 66-83.6 4 0 8 .8 11.6.8 4 0 5.2-2.4 5.2-9.2 0-10.4-7.6-16.8-18.4-16.8-48.8 0-95.2 40.8-95.2 107.6 0 34 16.4 60.4 47.6 60.4 15.2 0 26.4-7.2 34.4-16.4 6 9.6 16.8 16.4 30.8 16.4 34.4 0 50.4-36 57.2-62.4.4-1.6.4-2.4.4-2.8 0-7.6-7.6-16.4-14-16.4-4 0-8 3.6-9.6 12-3.6 17.6-10.8 43.2-26.8 43.2z"
				/>
				<path
					fill="currentColor"
					d="M378 185.4c34.4 0 50-36 57.2-62.4 0-.8.4-1.6.4-2.8 0-7.6-7.6-16.4-14-16.4-4 0-8 3.6-9.6 12-3.6 17.6-10.4 43.2-28.8 43.2-10.8 0-16-10.4-16-21.6 0-40 18-87.2 18-92C386.8 36.2 370.8 23 366 23h-20.8c-4 0-8 0-21.2-1.6C319.6 5 308.4.2 298.8.2c-10.4 0-20 7.2-20 18.4 0 11.6 7.2 20 17.2 25.6-.4 20.4-2 53.6-6.4 69.6-3.6 13.6 17.2 28 22.4 11.2 7.2-23.2 9.6-58 10-73.6h34.8c-12.8 34.4-20 62.8-20 88.4 0 35.2 22.4 45.6 41.2 45.6z"
				/>
				<path
					fill="currentColor"
					d="M413.6 167.8c0 14.8 11.2 17.6 19.2 17.6 11.6 0 11.2-9.6 11.2-17.2v-58.4c2.8-31.6 27.6-66 39.2-66 7.6 0 8.4 10.4 8.4 22.8v81.2c0 20.4 12.4 37.6 33.6 37.6 34.4 0 50.4-36 57.2-62.4.4-1.6.4-2.4.4-2.8 0-7.6-7.6-16.4-14-16.4-4 0-8 3.6-9.6 12-3.6 17.6-10.8 43.2-26.8 43.2-10.4 0-10.4-14.8-10.4-18.4V57.8c0-18.4-6.4-40.4-33.2-40.4-19.6 0-34 17.2-44.8 39.6V39c0-9.6-8.4-17.6-21.6-17.6-5.6 0-10.4 2.8-10.4 6.8 0 2.8 1.6 5.2 1.6 12.8v126.8z"
				/>
			</svg>
		</SocialBox>
	);
};
