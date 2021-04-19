import "./Scores.scss";

const Scores = ({ X, O }) => (
	<div className='scores'>
		<div className='scores__X'>{X}</div>
		<div className='scores__O'>{O}</div>
	</div>
);

export default Scores;
