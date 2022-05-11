import './Fretboard.css'
import { useContext } from 'react';
import TuningContext from '../../context/TuningContext';
import Form from '../Form/Form';

export default function Fretboard() {
    const {signature} = useContext(TuningContext);
    return <div className="Fretboard flex">
        </div>
}