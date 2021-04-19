import Square from "../Square";
import "./Board.scss";

const Board = ({ squares, onClick, turn, winSquares }) => {
	const renderSquares = (values) =>
		values.map((value, index) => (
			<Square key={index} winner={winSquares.includes(value)} turn={turn} onClick={() => onClick(value)} value={squares[value]} />
		));

	return (
		<div className='board'>
			<div className='row'>{renderSquares([0, 1, 2])}</div>
			<div className='row'>{renderSquares([3, 4, 5])}</div>
			<div className='row'>{renderSquares([6, 7, 8])}</div>
		</div>
	);
};

export default Board;
