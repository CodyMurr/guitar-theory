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
	// if signature.progression is set to 'major'
	const [mode, setMode] = useState(); // otherwise set to null

	// to toggle between rendering scale, notes, and chords
	const [content, setContent] = useState(null);

	const [scale, setScale] = useState([]);

	const [allNotes, setAllNotes] = useState(false);

	// const [chords, setChords] = useState(null)

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

	function changeMode(newMode) {
		setMode(newMode);
	}

	function switchContent(newContent) {
		setContent(newContent);
	}

	return (
		<TuningContext.Provider
			value={{
				signature,
				mode,
				formData,
				content,
				scale,
				display,
				allNotes,
				setFormData,
				changeSig,
				changeMode,
				switchContent,
			}}>
			{children}
		</TuningContext.Provider>
	);
}

export default TuningContext;
