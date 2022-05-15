import './App.css';
import { TuningProvider } from '../../context/TuningContext';
import { Routes, Route } from 'react-router-dom';
import DataDisplay from '../../components/DataDisplay/DataDisplay';
import Fretboard from '../../components/Fretboard/Fretboard';
import Header from '../../components/Header/Header';
import About from '../About/About';
import Form from '../../components/Form/Form';
function App() {
	return (
		<TuningProvider>
			<div className='App flex col'>
				<Header />
				<DataDisplay />
				<Routes>
					<Route path='/' element={<Fretboard />} />
					<Route path='/about' element={<About />} />
					<Route path='/settings' element={<Form />} />
				</Routes>
			</div>
		</TuningProvider>
	);
}

export default App;
