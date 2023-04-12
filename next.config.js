const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: false,
});
module.exports = withBundleAnalyzer({
	images: {
		domains: ["img.shields.io"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "shields.io",
				port: "",
				pathname: "**",
			},
		],
		unoptimized: true,
	},
	reactStrictMode: true,
	env: {
		THEME_COLOR: "#0ea5e9",
	},
});
