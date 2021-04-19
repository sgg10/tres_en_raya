import { createContext, useState } from "react";

const ThemeContext = createContext({ theme: true });

export const ThemeContextProvider = ({ children }) => {
	let initialTheme = true;
	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") === "true") initialTheme = true;
		else initialTheme = false;
	}
	const [theme, setTheme] = useState(initialTheme);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
