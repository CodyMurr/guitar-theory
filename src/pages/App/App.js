import './App.css';
import { TuningProvider } from '../../context/TuningContext';

import DataDisplay from '../../components/DataDisplay/DataDisplay';
import Fretboard from '../../components/Fretboard/Fretboard';

function App() {
  return (
    <TuningProvider>
      <div className="App flex col">
          <Fretboard />
            <DataDisplay />
      </div>
    </TuningProvider>
  );
}

export default App;
