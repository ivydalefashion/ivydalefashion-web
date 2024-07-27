'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import styles from '../_styles/profileComponent.module.scss';


const PersonalDetails = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

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
										<Button className={`${styles.button}`} variant="secondary" >
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
										<Button  className={`${styles.button}`}  variant="secondary" >
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
										<Button  className={`${styles.button}`}  variant="secondary" >
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
										<Button  className={`${styles.button}`}  variant="secondary" >
											Edit
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
				</Row>
			</Container>
		</div>
	);
};

export default PersonalDetails;
