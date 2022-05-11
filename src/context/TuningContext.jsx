import { createContext, useState } from "react";

const TuningContext = createContext();

export function TuningProvider({children}) {
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
    const [mode, setMode] = useState('ionian');  // otherwise set to null
    
    function changeSig(newTuning, newKey, newProgression) {
        setSignature({
            ...signature,
            tuning: newTuning,
            key: newKey,
            progression: newProgression
        });
    }

    function changeMode(newMode) {
        setMode(newMode);
    }

    return <TuningContext.Provider value={{ signature, mode, formData, setFormData, changeSig, changeMode  }}>
        {children}
    </TuningContext.Provider>
}

export default TuningContext;