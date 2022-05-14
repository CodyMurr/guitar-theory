import './Fretboard.css';
import { useContext } from 'react';
import {
	tunings,
	fretStyles,
	dots,
	getFretNotes,
} from '../../utilities/service-logic';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';
import Strings from '../Strings/Strings';

export default function Fretboard() {
	const { signature } = useContext(TuningContext);

	const frets = Object.keys(fretStyles);

	const fretNotes = getFretNotes(signature.tuning);

	return (
		<div className='fb-container flex'>
			<Strings />
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
							{dots[group][idx]}
							{tunings[signature.tuning].map((note, root) => (
								<span
									className='note disabled flex'
									key={Math.random() * 1000}>
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
