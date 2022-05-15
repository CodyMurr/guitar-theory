import './DataDisplay.css';
import { useContext } from 'react';
import { FaUndo } from 'react-icons/fa';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';

export default function DataDisplay() {
	const { signature, clear, display } = useContext(TuningContext);
	const sigCats = Object.keys(signature);

	return (
		<div className='DataDisplay flex'>
			{sigCats.map((s, idx) => (
				<section className='flex ' key={capitalize(s)}>
					<strong className='flex'>
						{capitalize(s)}:&nbsp;<p className='flex'>{display[s]}</p>
					</strong>
				</section>
			))}

			<section className='btns flex'>
				<FaUndo />
			</section>
		</div>
	);
}
