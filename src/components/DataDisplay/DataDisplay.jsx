import './DataDisplay.css';
import { useContext, useState } from 'react';
import { capitalize } from '../../utilities/helper-functions';
import { FaCog } from 'react-icons/fa';
import Modal from 'react-modal';
import TuningContext from '../../context/TuningContext';
import Form from '../Form/Form';

Modal.setAppElement('#root');

export default function DataDisplay() {
	const { signature, content, switchContent, renderScale } =
		useContext(TuningContext);
	const sigCats = Object.keys(signature);
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function handleScale() {
		switchContent(content);
		renderScale(signature.key, signature.progression);
	}
	function handleChords() {
		switchContent(content);
	}

	return (
		<div className='DataDisplay flex col'>
			{sigCats.map((s) => (
				<section className='flex' key={capitalize(s)}>
					<strong>{capitalize(s)}:&nbsp;</strong>
					<p>{capitalize(signature[s])}</p>
				</section>
			))}
			<div className='toggle flex' onClick={handleScale}>
				<span className={content === 1 ? 'content' : null}>
					Scale
				</span>
				<span
					className={content === -1 ? 'content' : null}
					onClick={handleChords}>
					Chords
				</span>
			</div>

			<button className='flex' onClick={openModal}>
				<FaCog size={25} color='#6b6b6b' />
				&nbsp;Settings
			</button>
			<Modal isOpen={modalIsOpen} className='settings-modal flex col'>
				<Form closeModal={closeModal} />
			</Modal>
		</div>
	);
}
