import { createContext, useState } from "react";

const TuningContext = createContext();

export function TuningProvider({children}) {
    const [tuning, setTuning] = useState('standard');

    function changeTuning(newTuning) {
        setTuning(newTuning);
    }
    return <TuningContext.Provider value={{ tuning, changeTuning }}>
        {children}
    </TuningContext.Provider>
}

export default TuningContext;