import './Fretboard.css';
import { useContext } from 'react';
import {
	tunings,
	fretStyles,
	getFretNotes,
	getScale,
} from '../../utilities/service-logic';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';
import Form from '../Form/Form';

export default function Fretboard() {
	const { signature } = useContext(TuningContext);

	const frets = Object.keys(fretStyles);

	const fretNotes = getFretNotes(signature.tuning);

	console.log(fretNotes);

	return (
		<div className='fb-container flex'>
			<section className='tuner flex col'>
				{tunings[signature.tuning].map((note, rootIdx) => (
					<span className='note flex' key={rootIdx}>
						{capitalize(note)}
					</span>
				))}
			</section>
			<section className='Fretboard flex'>
				{frets.map((group) =>
					fretStyles[group].frets.map((f, idx) => (
						<section
							className=' fret flex col'
							key={`${f}.${idx}`}
							style={{ width: fretStyles[group].width }}>
							{tunings[signature.tuning].map((note, root) => (
								<span className='note flex'>
									{capitalize(fretNotes[root][f - 1])}
								</span>
							))}
						</section>
					)),
				)}
			</section>
		</div>
	);
}
