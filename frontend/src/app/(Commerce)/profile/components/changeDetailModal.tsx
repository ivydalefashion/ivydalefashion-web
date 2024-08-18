import React, { ReactNode, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles/changeDetailsModal.module.scss';

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
		<Modal className={styles.modal} show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body className={styles.modalBody}>
				<Form>
					<Form.Group>
						{children || (
							<Form.Control
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						)}
					</Form.Group>
				</Form>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={onHide}>
					Cancel
				</Button>
				<Button variant="primary" onClick={handleSave}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditFormModal;
