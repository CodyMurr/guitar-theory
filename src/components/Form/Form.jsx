import './Form.css'
import { useContext } from 'react';
import { notes, tunings, progressions } from '../../utilities/service-logic';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';

export default function Form() {
    const { signature, mode, changeSig, changeMode  } = useContext(TuningContext);
    const selects = Object.keys(signature);
    const progs = Object.keys(progressions);
    const tuningNames = Object.keys(tunings);
    const vals = [tuningNames, notes, progs];
    return (
        <form className="Form flex col">
            {
                selects.map((s, idx) => (
                    <label className='flex col' key={`${s}-${idx}`}>{capitalize(s)}
                    <select name={s} key={s}>
                        <option value={null}>Select {capitalize(s)}...</option>
                        {vals[idx].map((v, idx) => (
                        <option value={v} key={v}>{capitalize(v)}</option>
                        ))}
                    </select>
                    </label>
                ))
            }
            <button type="submit">Save</button>
        </form>
    )
}