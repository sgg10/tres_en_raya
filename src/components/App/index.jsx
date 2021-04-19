import { useContext } from "react";
import "./App.scss";
import Header from "../Header";
import Game from "../Game";
import ThemeContext from "../../context/ThemeContext";

const App = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${theme ? "darkTheme" : "lightTheme"}`}>
			<Header />
			<div className='container'>
				<Game />
			</div>
		</div>
	);
};

export default App;
