import React, { ReactNode, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles/changeDetailsModal.module.scss';
import './styles/changeDetailsModal.css'

interface EditFormModalProps {
	show: boolean;
	onHide: () => void;
	onSave: (value: string) => void;
	title: string;
	initialValue: string;
	children?: ReactNode;
}

const EditFormModal: React.FC<EditFormModalProps> = ({
	show,
	onHide,
	onSave,
	title,
	initialValue,
	children,
}) => {
	const [value, setValue] = useState(initialValue);

	const handleSave = () => {
		onSave(value);
		onHide();
	};

	return (
		<Modal className='modal' show={show} onHide={onHide}>
			<Modal.Header closeButton className='modalHeader'>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body className={`modalBody`}>
				<Form>
					<Form.Group>
						{children }
					</Form.Group>
				</Form>
			</Modal.Body>

			<Modal.Footer className={`modalFooter`}>
				<Button variant="secondary" className='cancelButton' onClick={onHide}>
					Cancel
				</Button>
				<Button variant="primary" className='saveButton' onClick={handleSave}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditFormModal;
