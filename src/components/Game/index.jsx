import { useState } from "react";
import Board from "../Board";
import Scores from "../Scores";

const winPositions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
];

const Game = () => {
	const [turn, setTurn] = useState("X");
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [scores, setScores] = useState({ X: 0, O: 0 });
	const [winSquares, setWinSquares] = useState([]);

	const resetGame = () => {
		setTurn("X");
		setSquares(Array(9).fill(null));
		setWinSquares([]);
	};

	const checkWinner = (squares) => {
		for (let i = 0; i < winPositions.length; i++) {
			const [a, b, c] = winPositions[i];
			if (!squares.includes(null)) {
				endGame(null, Array.from(Array(10).keys()));
				return;
			}
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				endGame(squares[a], winPositions[i]);
				return;
			}
		}
		setTurn(turn === "X" ? "O" : "X");
	};

	const handleClick = (square) => {
		let copySquare = [...squares];
		copySquare.splice(square, 1, turn);
		setSquares(copySquare);
		checkWinner(copySquare);
	};

	const endGame = (winPositions, result) => {
		setTurn(null);
		if (result) {
			setScores({
				...scores,
				[winPositions]: scores[winPositions] + 1,
			});
		}
		setWinSquares(result);
		setTimeout(resetGame, 2000);
	};

	return (
		<>
			<Board winSquares={winSquares} turn={turn} squares={squares} onClick={handleClick} />
			<Scores {...scores} />
		</>
	);
};

export default Game;
