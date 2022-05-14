import { createContext, useState } from 'react';
import { getScale } from '../utilities/service-logic';

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
	// if signature.progression is set to 'major'
	const [mode, setMode] = useState('ionian'); // otherwise set to null

	// to toggle between rendering scale and chords
	const [content, setContent] = useState(1); // options are 1 & -1

	const [scale, setScale] = useState([]);

	function changeSig(newTuning, newKey, newProgression) {
		setSignature({
			...signature,
			tuning: newTuning,
			key: newKey,
			progression: newProgression,
		});
	}

	function changeMode(newMode) {
		setMode(newMode);
	}

	function switchContent(cont) {
		setContent((cont *= -1));
	}

	function renderScale(key, prog) {
		const newScale = getScale(key, prog);
		setScale(newScale);
	}

	function clear() {
		setScale(null);
	}

	return (
		<TuningContext.Provider
			value={{
				signature,
				mode,
				formData,
				content,
				scale,
				setFormData,
				changeSig,
				changeMode,
				switchContent,
				renderScale,
				clear,
			}}>
			{children}
		</TuningContext.Provider>
	);
}

export default TuningContext;
