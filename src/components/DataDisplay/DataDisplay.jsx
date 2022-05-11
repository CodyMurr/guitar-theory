import { useContext, useState } from "react"
import { capitalize } from "../../utilities/helper-functions";
import Modal from 'react-modal';
import TuningContext from "../../context/TuningContext";
import Form from "../Form/Form";

Modal.setAppElement('#root');

export default function DataDisplay() {
    const { signature } = useContext(TuningContext);
    const sigCats = Object.keys(signature);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
    <div className="DataDisplay flex">
        <Modal isOpen={modalIsOpen}>
            <Form closeModal={closeModal}/>
        </Modal>
        {
        sigCats.map(s => (
            <section className="flex col" key={capitalize(s)}>
                <strong>{capitalize(s)}:&nbsp;</strong>
                <p>{capitalize(signature[s])}</p>
            </section>
        ))
    }</div>
    )
}