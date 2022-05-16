import { createContext, useState } from 'react';
import { tunings, getScale } from '../utilities/service-logic';
import { capitalize } from '../utilities/helper-functions';

const TuningContext = createContext();

export function TuningProvider({ children }) {
	const [signature, setSignature] = useState({
		tuning: 'standard',
		key: 'c',
		progression: 'major',
	});

	const [formData, setFormData] = useState({
		tuning: '',
		key: '',
		progression: '',
	});

	const [scale, setScale] = useState([]);

	const [currentMode, setCurrentMode] = useState('scale');

	const display = {
		tuning: <p>{tunings[signature.tuning].join('').toUpperCase()}</p>,
		key: <p>{capitalize(signature.key)}</p>,
		progression: <p>{capitalize(signature.progression)}</p>,
	};

	function changeSig(newTuning, newKey, newProgression) {
		setSignature({
			...signature,
			tuning: newTuning,
			key: newKey,
			progression: newProgression,
		});
	}

	function renderScale(newKey, prog) {
		setScale(getScale(newKey, prog));
	}

	function toggleMode(newMode) {
		setCurrentMode(newMode);
	}

	return (
		<TuningContext.Provider
			value={{
				signature,
				formData,
				scale,
				currentMode,
				display,
				setFormData,
				changeSig,
				renderScale,
				toggleMode,
			}}>
			{children}
		</TuningContext.Provider>
	);
}

export default TuningContext;
