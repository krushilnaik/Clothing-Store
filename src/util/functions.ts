/**
 * Convert a strung into a version useable in code
 * e.g. Sign In --> sign-in
 */
export function uglify(input: string) {
	return input.toLowerCase().replaceAll(' ', '-');
}
