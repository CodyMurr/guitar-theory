import './DataDisplay.css';
import { useContext } from 'react';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';

export default function DataDisplay() {
	const { signature, content, display, switchContent } =
		useContext(TuningContext);
	const sigCats = Object.keys(signature);

	return (
		<div className='DataDisplay flex'>
			{sigCats.map((s, idx) => (
				<section className='flex ' key={capitalize(s)}>
					<strong className='flex'>
						{capitalize(s)}:&nbsp;{display[s]}
					</strong>
				</section>
			))}
		</div>
	);
}
