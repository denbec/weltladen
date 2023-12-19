/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		potms: await directus.request(
			readItems('product_of_the_month', {
				fields: ['slug', 'name', 'publish_date'],
				sort: ['-publish_date']
			})
		)
	};
}
