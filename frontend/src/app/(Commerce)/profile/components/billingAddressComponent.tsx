'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup , Card} from 'react-bootstrap';
import styles from '../../_styles/addressComponent.module.scss';
import ResponsiveImage from '../../_components/ResponsiveImage';
import { Order } from '../../_components/Interfaces';
import { orderExample } from '../../_components/InterfacesExamples';
import ShowOrderModal from './showOrderModal';
import ColoredTitle from './ColoredTitle';
import EditFormModal from './changeDetailModal';

//
const BillingAddressComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [orders, setOrders] = useState<Order[]>([...orderExample]);
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);


	const closeModal = () => {
		setShowModal(false);
	};

	const [editField, setEditField] = useState('Address');
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
					<ColoredTitle title={'Address'}></ColoredTitle>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Recipient name</strong>
									<div>Romeo Mamphekgo</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Recipient phone number</strong>
									<div>+27 67 241 3376</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Street address</strong>
									<div>**************</div>
									<small>Powered by google</small>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Complex/Building... optional </strong>
									<div>45 Main building, 2nd col</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Suburb </strong>
									<div>Fauna park</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>City</strong>
									<div>Pretoria</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Province</strong>
									<div>Gauteng</div>
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
						Edit address details
					</Button>
				</Row>
			</Container>


			{/* MODAL ---------------------------------------------------------- */}
			<EditFormModal
				
				show={showModal}
				onHide={() => setShowModal(false)}
				onSave={handleSave}
				title={`Edit ${editField}`}
				initialValue={userData[editField as keyof typeof userData]}
				bodyChildren={
					<Form className={styles.formModal}>
						<Form.Group className={styles.formGroup}>
							<Form.Label htmlFor="input1">Recipient Name</Form.Label>
							<Form.Control
								className={styles.inputField}
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className={styles.formGroup}>
						<Form.Label htmlFor="input1">Recipient Phone number</Form.Label>
							<Form.Control
								className={styles.inputField}
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className={styles.formGroup}>
							<Form.Label htmlFor="input1">Street address</Form.Label>

							<Form.Control
								className={styles.inputField}
								type="text"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className={styles.formGroup}>
							<Form.Label htmlFor="input1">Complex Building</Form.Label>

							<Form.Control
								className={styles.inputField}
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
						<Button variant="primary" className="saveButton" >
							Save Changes
						</Button>
					</div>
				)}
			/>
		</div>
	);
};

export default BillingAddressComponent;
