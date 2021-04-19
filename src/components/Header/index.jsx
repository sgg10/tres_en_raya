import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import "./Header.scss";

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleChangeTheme = () => setTheme(!theme);

	return (
		<div className='header'>
			<div className='header__title'>
				<p>
					<a href='https://github.com/sgg10/' target='_blank'>
						Triki SGG
					</a>
				</p>
			</div>
			<div className='header__theme'>
				{!theme && (
					<p onClick={handleChangeTheme}>
						<Brightness2Icon className='header__theme__dark' />
					</p>
				)}
				{theme && (
					<p onClick={handleChangeTheme}>
						<Brightness7Icon className='header__theme__ligth' />
					</p>
				)}
			</div>
		</div>
	);
};

export default Header;
