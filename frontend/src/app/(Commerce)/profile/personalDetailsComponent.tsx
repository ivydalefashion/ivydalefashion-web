'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import styles from '../_styles/profileComponent.module.scss';
import EditFormModal from './components/changeDetailModal'; // Edit Details Modal

const PersonalDetails = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
	return (
		<div className={styles.personalDetailsMain}>
			<Container className={styles.mainContainer}>
				<Row>
					<h1>Personal details</h1>
					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Your Name</strong>
									<div>Romeo Mamphekgo</div>
								</Col>
								<Col xs="auto">
									<Button
										className={`${styles.button}`}
										onClick={() => {
											handleEdit('name');
										}}
										variant="secondary"
									>
										Edit
									</Button>
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
								<Col xs="auto">
									<Button className={`${styles.button}`} variant="secondary">
										Edit
									</Button>
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
								<Col xs="auto">
									<Button className={`${styles.button}`} variant="secondary">
										Reset
									</Button>
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
								<Col xs="auto">
									<Button className={`${styles.button}`} variant="secondary">
										Edit
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Row>
			</Container>

			<EditFormModal
				show={showModal}
				onHide={() => setShowModal(false)}
				onSave={handleSave}
				title={`Edit ${editField}`}
				initialValue={userData[editField as keyof typeof userData]}
			/>
		</div>
	);
};

export default PersonalDetails;
