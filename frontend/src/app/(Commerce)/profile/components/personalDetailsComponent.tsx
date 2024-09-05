'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import styles from '../../_styles/personalDetails.module.scss';
import EditFormModal from './changeDetailModal'; // Edit Details Modal

import ColoredTitle from './ColoredTitle';

const PersonalDetails = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const [showModal, setShowModal] = useState(false);
	const [editField, setEditField] = useState('');
	const [userData, setUserData] = useState({
		name: 'Romeo Mamphekgo',
		email: 'RomeoMamphekgo@gmail.com',
		mobileNumber: '+27 67 676 6767',
	});

	const handleEdit = (field: string) => {
		setEditField(field);
		setShowModal(true);
	};

	const handleSave = (value: string) => {
		setUserData((prevData) => ({
			...prevData,
			[editField]: value,
		}));
		// Here you would typically also send an API request to update the data
	};

	// modal data:
	const [value, setValue] = useState('water');

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<Row>
					<ColoredTitle title={'Personal details'}></ColoredTitle>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Your Name</strong>
									<div>Romeo Mamphekgo</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Email Address</strong>
									<div>RomeoMamphekgo@gmail.com</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Password</strong>
									<div>**************</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Mobile Number</strong>
									<div>+27 67 676 6767</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Row>

				<Row className={styles.editDetailsButtonRow}>
					<Button
						className={styles.editDetailsButton}
						onClick={() => {
							handleEdit('name');
						}}
					>
						Edit Personal details
					</Button>
				</Row>
			</Container>

			{/* Modal  --------------------------------------------------------- */}

			<EditFormModal
				show={showModal}
				onHide={() => setShowModal(false)}
				onSave={handleSave}
				title={`Edit ${editField}`}
				initialValue={userData[editField as keyof typeof userData]}
				bodyChildren={
					<Form>
						<Form.Group>
							<Form.Control
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>
					</Form>
				}
				footerChildren={(handleSave2) => (
					<div>
						<Button variant="secondary" className="cancelButton" onClick={closeModal}>
							Cancel
						</Button>
						<Button variant="primary" className="saveButton" onClick={handleSave2}>
							Save Changes
						</Button>
					</div>
				)}
			/>
		</div>
	);
};

export default PersonalDetails;
