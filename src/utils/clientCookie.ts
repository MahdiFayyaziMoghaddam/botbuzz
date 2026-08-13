export const clientCookie = {
	get: (name: string) => {
		const value = document.cookie
			.split("; ")
			.find((row) => row.startsWith(`${name}=`))
			?.split("=")[1];
		return value;
	},
	set: (name: string, value: string) => {
		document.cookie = `${name}=${value}; path=/`;
	}
};
