'use client';

import React, { useState } from 'react';
import { Container, Col, Row, Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import MainNavbar from '../_components/Header';
import styles from '../_styles/profileComponent.module.scss';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

// Components:
import InvoicesComponent from './invoicesComponent';
import OrdersComponent from './ordersComponent';

const ProfilePageComponent = () => {
	const [activeKey, setActiveKey] = useState<any>(null);

	const handleAccordionToggle = (eventKey: any) => {
		setActiveKey(activeKey === eventKey ? null : eventKey);
	};

	return (
		<div className={`${styles.main}`}>
			<MainNavbar></MainNavbar>

			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Container className={`${styles.mainContainer}`}>
					<Row>
						<Col className={`${styles.profileCol}`} lg={4} md={4} sm={12}>
							<Nav variant="pills" className="flex-column">
								<h3>Profile</h3>
								<Card
									className={`${styles.profileCard}`}
									style={{ width: '300px' }}
								>
									{/* <Card.Header as="h5">MY PROFILE</Card.Header> */}
									<Card.Body>
										<Accordion
											activeKey={activeKey}
											onSelect={handleAccordionToggle}
											className={styles.accordion}
										>
											<Accordion.Item
												eventKey="0"
												className={`${styles.accordionItem} ${activeKey === '0' ? styles.active : ''}`}
											>
												<Accordion.Header
													className={styles.accordionHeader}
												>
													<i className="bi bi-cart"></i> Orders
												</Accordion.Header>
												<Accordion.Body
													className={`${styles.accordionBody}`}
												>
													<ListGroup variant="flush">
														{/* tab one */}
														<Nav.Link eventKey="orders">
															<ListGroup.Item>Orders</ListGroup.Item>
														</Nav.Link>
														<Nav.Link eventKey="invoices">
															<ListGroup.Item>
																Invoices
															</ListGroup.Item>
														</Nav.Link>
														<Nav.Link eventKey="returns">
															<ListGroup.Item>Returns</ListGroup.Item>
														</Nav.Link>
														<Nav.Link eventKey="personaldetails">
															<ListGroup.Item>
																PersonalDetails
															</ListGroup.Item>
														</Nav.Link>
													</ListGroup>
												</Accordion.Body>
											</Accordion.Item>

											<Accordion.Item
												className={`${styles.accordionItem}`}
												eventKey="1"
											>
												<Accordion.Header
													className={`${styles.accordionHeader}`}
												>
													<i className="bi bi-credit-card"></i> Payment
													Details
												</Accordion.Header>
												<Accordion.Body>
													<ListGroup variant="flush">
														<ListGroup.Item>
															Card Details
														</ListGroup.Item>
													</ListGroup>
												</Accordion.Body>
											</Accordion.Item>

											<Accordion.Item
												className={`${styles.accordionItem}`}
												eventKey="2"
											>
												<Accordion.Header
													className={`${styles.accordionHeader}`}
												>
													<i className="bi bi-person"></i> Customer
													Information
												</Accordion.Header>
												<Accordion.Body>
													<ListGroup variant="flush">
														{/* tab 2 */}
														<Nav.Link eventKey="second">
															<ListGroup.Item>
																Personal Information
															</ListGroup.Item>
														</Nav.Link>

														<ListGroup.Item>
															Billing Address
														</ListGroup.Item>
													</ListGroup>
												</Accordion.Body>
											</Accordion.Item>

											<Accordion.Item
												className={`${styles.accordionItem}`}
												eventKey="3"
											>
												<Accordion.Header
													className={`${styles.accordionHeader}`}
												>
													<i className="bi bi-heart"></i> My Wishlist
												</Accordion.Header>
												<Accordion.Body>
													<ListGroup variant="flush">
														<ListGroup.Item>My List</ListGroup.Item>
													</ListGroup>
												</Accordion.Body>
											</Accordion.Item>

											<Accordion.Item
												className={`${styles.accordionItem} ${styles.accordionSettings}`}
												eventKey="4"
											>
												<Accordion.Header
													className={`${styles.accordionHeader}`}
												>
													<i className="bi bi-heart"></i> My Settings
												</Accordion.Header>
												<Accordion.Body>
													<ListGroup variant="flush">
														<ListGroup.Item>
															<Link href="/signin">
																<Button
																	className={
																		styles.accordionSettingsButton
																	}
																	variant="danger"
																>
																	Sign Out
																</Button>
															</Link>
														</ListGroup.Item>
													</ListGroup>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</Card.Body>
								</Card>
							</Nav>
						</Col>

						<Col className={`${styles.detailsCol}`} lg={8} md={8} sm={12}>
							<Tab.Content>
								<Tab.Pane eventKey="orders">
									<OrdersComponent></OrdersComponent>
								</Tab.Pane>
								<Tab.Pane eventKey="invoices">
									<InvoicesComponent></InvoicesComponent>
								</Tab.Pane>
							</Tab.Content>
						</Col>

						{/* <Col className={`${styles.detailsCol}`} lg={8} md={8} sm={12}>
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
					</Col> */}
					</Row>
				</Container>
			</Tab.Container>
		</div>
	);
};

export default ProfilePageComponent;
