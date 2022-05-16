import './DataDisplay.css';
import { useContext } from 'react';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';

const activeModeStyle = {
	backgroundColor: '#776f6c',
	color: '#d8d8d8',
	fontWeight: 700,
	fontSize: '1.5em',
};
const inactiveModeStyle = {
	color: '#817b78',
	backgroundColor: 'transparent',
};

export default function DataDisplay() {
	const { signature, currentMode, display, toggleMode } =
		useContext(TuningContext);
	const sigCats = Object.keys(signature);

	function handleClick(e) {
		e.preventDefault();
		if (!e.target.id) return;
		toggleMode(e.target.id);
	}

	return (
		<div className='DataDisplay flex'>
			{sigCats.map((s, idx) => (
				<section className='flex ' key={capitalize(s)}>
					<strong className='flex'>
						{capitalize(s)}:&nbsp;{display[s]}
					</strong>
				</section>
			))}
			{/* {scale &&
				scale.map((s, idx) => (
					<strong key={idx}>{s.toUpperCase()}</strong>
				))} */}
			<section className='toggle flex' onClick={handleClick}>
				<span
					id='scale'
					className='flex'
					style={
						currentMode === 'scale'
							? activeModeStyle
							: inactiveModeStyle
					}>
					Scale
				</span>
				<span
					id='notes'
					className='flex'
					style={
						currentMode === 'notes'
							? activeModeStyle
							: inactiveModeStyle
					}>
					Notes
				</span>
			</section>
		</div>
	);
}
