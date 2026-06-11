import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const HomepageFile = await import('$lib/homepage.md');
		const Homepage = HomepageFile.default;

		return {
			Homepage
		};
	} catch (err) {
		error(500, err);
	}
};
