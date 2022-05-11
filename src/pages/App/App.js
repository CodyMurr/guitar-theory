import './App.css';
import { TuningProvider } from '../../context/TuningContext'
import Fretboard from '../../components/Fretboard/Fretboard';

function App() {
  return (
    <TuningProvider>
      <div className="App flex col">
          <Fretboard />
      </div>
    </TuningProvider>
  );
}

export default App;
