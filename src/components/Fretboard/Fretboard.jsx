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
	const { signature, scale, allNotes } = useContext(TuningContext);

	const frets = Object.keys(fretStyles);

	const fretNotes = getFretNotes(signature.tuning);

	return (
		<div className='fb-container flex'>
			<Strings />

			<section className='tuner flex col'>
				{signature.tuning &&
					tunings[signature.tuning].map((note, rootIdx) => (
						<span
							className={`flex note ${
								(scale && scale.includes(note)) || allNotes
									? 'active-root'
									: 'disabled-root'
							}`}
							key={rootIdx}>
							{capitalize(note)}
						</span>
					))}
			</section>

			<section className='Fretboard flex'>
				{frets &&
					frets.map((group) =>
						fretStyles[group].frets.map((f, idx) => (
							<section
								className=' fret flex col'
								key={`${f}.${idx}`}
								style={{
									width: fretStyles[group].width,
								}}>
								{dots[group][idx]}
								{signature.tuning &&
									tunings[signature.tuning].map((note, root) => (
										<span
											className={`note flex ${
												(scale &&
													scale.includes(fretNotes[root][f - 1])) ||
												allNotes
													? 'active'
													: 'disabled'
											}`}
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
