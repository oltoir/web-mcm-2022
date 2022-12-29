import Modal from 'react-modal';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

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
	const [isReg, setIsReg] = useState<boolean>(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="z-50">
			<button
				onClick={openModal}
				className="rounded-xl py-4 px-5
			text-gray-400 hover:bg-gray-100
			hover:text-black text-lg"
			>
				Войти
			</button>
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
				{isReg ? (
					<RegisterForm closeModal={closeModal} setIsRegister={setIsReg} />
				) : (
					<LoginForm closeModal={closeModal} setIsRegister={setIsReg} />
				)}
			</Modal>
		</div>
	);
}
