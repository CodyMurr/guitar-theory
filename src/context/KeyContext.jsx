import { createContext, useState } from "react";

const KeyContext = createContext();

export function KeyProvider({children}) {
    const [signature, setSignature] = useState({
        key: 'c',
        progression: 'major',
    });

    // if signature.progression is set to 'major'
    const [mode, setMode] = useState('ionian');  // otherwise set to null
    
    function changeSig(newKey, newProgression, newMode) {
        setSignature({
            ...signature,
            key: newKey,
            progression: newProgression
        });
    }

    function changeMode(newMode) {
        setMode(newMode);
    }

    return <KeyContext.Provider value={{ signature, mode, changeSig, changeMode }}>
        {children}
    </KeyContext.Provider>
}