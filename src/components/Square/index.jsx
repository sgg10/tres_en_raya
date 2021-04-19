import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Square.scss";

const Square = ({ value, onClick, turn, winner }) => {
	const { theme } = useContext(ThemeContext);
	const handleClick = () => !value && turn && onClick();

	return (
		<div
			className={`square ${theme ? "darkSquareTheme" : "ligthSquareTheme"} ${value ? value : ""} ${winner ? `${value}-winner` : ""}`}
			onClick={() => handleClick()}
		/>
	);
};

export default Square;
