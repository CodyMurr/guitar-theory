import './Fretboard.css'
import { useContext } from 'react';
import TuningContext from '../../context/TuningContext';

export default function Fretboard() {
    const {signature} = useContext(TuningContext)
    return <div className="Fretboard flex">
        
        </div>
}