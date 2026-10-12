export function load({ cookies }) {
	return {
		flag: cookies.get('animation') === 'true'
	};
}
