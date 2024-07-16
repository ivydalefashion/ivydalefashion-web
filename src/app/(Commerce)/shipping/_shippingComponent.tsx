'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import styles from '../_styles/signinComponent.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AlertDismissible from '../_components/DismissableAlert';

const ShippingDetailsComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div>
			<Container>
				<Row>
					<Col md={8}>
						<h2>Contact</h2>
						<Form>
							<Form.Group className="mb-3">
								<Form.Control type="email" placeholder="Email" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Check type="checkbox" label="Email me news and offers" />
							</Form.Group>

							<h2>Shipping Address</h2>
							<Form.Group className="mb-3">
								<Form.Select>
									<option>Country/Region</option>
									{/* Add more country options */}
								</Form.Select>
							</Form.Group>

							<Row className="mb-3">
								<Col>
									<Form.Control placeholder="First Name" />
								</Col>
								<Col>
									<Form.Control placeholder="Last Name" />
								</Col>
							</Row>

							<Form.Group className="mb-3">
								<Form.Control placeholder="Company Name" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Control placeholder="Address" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Control placeholder="Apartment, Suite etc." />
							</Form.Group>

							<Row className="mb-3">
								<Col>
									<Form.Control placeholder="City" />
								</Col>
								<Col>
									<Form.Control placeholder="Province" />
								</Col>
								<Col>
									<Form.Control placeholder="Postal Code" />
								</Col>
							</Row>

							<Form.Group className="mb-3">
								<Form.Control placeholder="Phone Number" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Check
									type="checkbox"
									label="Save this information for next time"
								/>
							</Form.Group>

							<div className="d-flex justify-content-between">
								<Button variant="link">← Return to cart</Button>
								<Button variant="primary">Continue to shipping</Button>
							</div>
						</Form>
					</Col>
					<Col md={4}>
						<div className="border p-3">
							<h3>Order Summary</h3>
							<p>1 Item: R350</p>
							<p>Delivery: R50</p>
							<hr />
							<h4>TO PAY: R354</h4>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ShippingDetailsComponent;
