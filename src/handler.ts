// Utilities
import error from "./error";

export default async (file: string) => {
	let mod;

	try {
		mod = await import(file); // Await to support exporting Promises

		if (mod && typeof mod === "object") {
			mod = await mod.default; // Await to support es6 module's default export
		}
	} catch (err) {
		error(`Error when importing ${file}: ${err.stack}`, "invalid-entry");
	}

	if (typeof mod !== "function") {
		error(`The file "${file}" does not export a function.`, "no-export");
	}

	return mod;
};
