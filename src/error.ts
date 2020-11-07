export default (message: string, code: string) => {
	console.error(`microserver ${code}: ${message}`);
};
