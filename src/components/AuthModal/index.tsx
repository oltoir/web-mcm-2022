import Modal from 'react-modal';
import { useState } from 'react';
import { Form } from './Form';

export function AuthModal() {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="z-50">
			<button onClick={openModal}>войти</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
				style={customStyles}
			>
				<button
					onClick={closeModal}
					className="px-5 py-2.5 rounded-full bg-gray-100"
				>
					X
				</button>
				<Form />
			</Modal>
		</div>
	);
}
