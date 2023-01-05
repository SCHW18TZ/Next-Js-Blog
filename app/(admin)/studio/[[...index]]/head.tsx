// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from "next-sanity/studio/head";

// To customize it, use it as a children component:
import { NextStudioHead } from "next-sanity/studio/head";

export default function CustomStudioHead() {
	return (
		<>
			<NextStudioHead favicons={false} />
			<title>CMS</title>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="https://avatars.githubusercontent.com/u/63994977?s=400&u=ebd5f0cba5a8ec304bf1bfbe6211cc07a95a973e&v=4"
			/>
		</>
	);
}
