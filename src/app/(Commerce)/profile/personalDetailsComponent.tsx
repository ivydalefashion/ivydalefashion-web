'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import styles from '../_styles/profileComponent.module.scss';


const PersonalDetails = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div>
			<Container>
				<Row>
					<h1>Personal details</h1>

					<Col className={`${styles.detailsCol}`} lg={8} md={8} sm={12}>
						<h2>Personal Details</h2>
						<Card className="mb-3">
							<Card.Body>
								<Row className="align-items-center">
									<Col>
										<strong>Your Name</strong>
										<div>Romeo Mamphekgo</div>
									</Col>
									<Col xs="auto">
										<Button variant="secondary" size="sm">
											Edit
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>

						<Card className="mb-3">
							<Card.Body>
								<Row className="align-items-center">
									<Col>
										<strong>Email Address</strong>
										<div>RomeoMamphekgo@gmail.com</div>
									</Col>
									<Col xs="auto">
										<Button variant="secondary" size="sm">
											Edit
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>

						<Card className="mb-3">
							<Card.Body>
								<Row className="align-items-center">
									<Col>
										<strong>Password</strong>
										<div>**************</div>
									</Col>
									<Col xs="auto">
										<Button variant="secondary" size="sm">
											Reset
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>

						<Card className="mb-3">
							<Card.Body>
								<Row className="align-items-center">
									<Col>
										<strong>Mobile Number</strong>
										<div>+27 67 676 6767</div>
									</Col>
									<Col xs="auto">
										<Button variant="secondary" size="sm">
											Edit
										</Button>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PersonalDetails;
