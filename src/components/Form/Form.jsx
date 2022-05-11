import './Form.css'
import { useContext } from 'react';
import { notes, tunings, progressions } from '../../utilities/service-logic';
import { capitalize } from '../../utilities/helper-functions';
import TuningContext from '../../context/TuningContext';

export default function Form({closeModal}) {
    const { signature, mode, changeSig, changeMode, formData, setFormData  } = useContext(TuningContext);
    const selects = Object.keys(signature);
    const progs = Object.keys(progressions);
    const tuningNames = Object.keys(tunings);
    const vals = [tuningNames, notes, progs];

    function handleChange(e) {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        changeSig(formData.tuning, formData.key, formData.progression);
        setTimeout(() => {
            closeModal();
        }, 500);
    }
    return (
        <form className="Form flex col" onSubmit={handleSubmit}>
            {
                selects.map((s, idx) => (
                    <label className='flex col' key={`${s}-${idx}`}>{capitalize(s)}
                    <select name={s} key={s} onChange={handleChange}>
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