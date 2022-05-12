import './Strings.css';

import { useContext } from 'react';
import { tunings } from '../../utilities/service-logic';
import TuningContext from '../../context/TuningContext';

export default function Strings() {
	const { signature } = useContext(TuningContext);

	return (
		<ul className='Strings flex col'>
			{tunings[signature.tuning].map((note, idx) => (
				<li className='string' key={`${note}-${idx * 6}`}></li>
			))}
		</ul>
	);
}
