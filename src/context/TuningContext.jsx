import { createContext, useState } from "react";

const TuningContext = createContext();

export function TuningProvider({children}) {
    const [signature, setSignature] = useState({
        tuning: 'standard',
        key: 'c',
        progression: 'major',
    });
    // if signature.progression is set to 'major'
    const [mode, setMode] = useState('ionian');  // otherwise set to null
    
    function changeSig(newTuning, newKey, newProgression, newMode) {
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

    return <TuningContext.Provider value={{ signature, mode, changeSig, changeMode  }}>
        {children}
    </TuningContext.Provider>
}

export default TuningContext;