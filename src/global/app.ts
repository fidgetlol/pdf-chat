import { defineCustomElements } from '@teamhive/pdf-viewer/dist/loader';
export default async () => {
    defineCustomElements(window);
	/**
	 * The code to be executed should be placed within a default function that is
	 * exported by the global script. Ensure all of the code in the global script
	 * is wrapped in the function() that is exported.
	 */
}
