'use client';

import { Container, Col, Row, Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import MainNavbar from '../_components/Header';
import styles from '../_styles/profileComponent.module.scss';
import Link from 'next/link'

const ProfilePageComponent = () => {
	return (
		<div className={`${styles.main}`}>
			<MainNavbar></MainNavbar>

			<Container className={`${styles.mainContainer}`}>
				<Row>
					<Col className={`${styles.profileCol}`} lg={4} md={4} sm={12}>
						<Card style={{ width: '300px' }}>
							<Card.Header as="h5">MY PROFILE</Card.Header>
							<Card.Body>
								<Accordion className={styles.accordion}>
									<Accordion.Item eventKey="0">
										<Accordion.Header>
											<i className="bi bi-cart"></i> Orders
										</Accordion.Header>
										<Accordion.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>Orders</ListGroup.Item>
												<ListGroup.Item>Invoices</ListGroup.Item>
												<ListGroup.Item>Returns</ListGroup.Item>
												<ListGroup.Item>Personal Details</ListGroup.Item>
												
											</ListGroup>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="1">
										<Accordion.Header>
											<i className="bi bi-credit-card"></i> Payment Details
										</Accordion.Header>
										<Accordion.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>Card Details</ListGroup.Item>
											</ListGroup>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="2">
										<Accordion.Header>
											<i className="bi bi-person"></i> Customer Information
										</Accordion.Header>
										<Accordion.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>
													Personal Information
												</ListGroup.Item>
												<ListGroup.Item>Billing Address</ListGroup.Item>
											</ListGroup>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="3">
										<Accordion.Header>
											<i className="bi bi-heart"></i> My Wishlist
										</Accordion.Header>
										<Accordion.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>My List</ListGroup.Item>
											</ListGroup>
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item className={styles.accordionSettings} eventKey="4">
										<Accordion.Header>
											<i className="bi bi-heart"></i> My Settings
										</Accordion.Header>
										<Accordion.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>
													<Link href="/signin">
														<Button className={styles.accordionSettingsButton} variant='danger'>Sign Out</Button>
													</Link>
													
												</ListGroup.Item>
											</ListGroup>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Card.Body>
						</Card>
					</Col>

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

export default ProfilePageComponent;
