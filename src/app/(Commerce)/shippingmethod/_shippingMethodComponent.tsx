'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import styles from '../_styles/signinComponent.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AlertDismissible from '../_components/DismissableAlert';

const ShippingMethodComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div>
			<Container>
				<Row>
					<Col md={8}>
						<div className="border p-3 mb-3">
							<Row>
								<Col>
									<strong>Contact</strong>
									<p>ivydale@gmail.com</p>
								</Col>
								<Col className="text-end">
									<Button variant="link">Change</Button>
								</Col>
							</Row>
						</div>

						<div className="border p-3 mb-3">
							<Row>
								<Col>
									<strong>Ship to</strong>
									<p>
										ivydale 65th street
										<br />
										Polokwane, 0699
									</p>
								</Col>
								<Col className="text-end">
									<Button variant="link">Change</Button>
								</Col>
							</Row>
						</div>

						<h3>Shipping Method</h3>
						<Form>
							<Form.Check
								type="radio"
								id="shipping-standard"
								label="2-4 days courier delivery to your door anywhere in South Africa"
								name="shippingMethod"
								className="mb-2"
							/>
							<Form.Check
								type="radio"
								id="shipping-overnight"
								label="OVERNIGHT COURIER to your door."
								name="shippingMethod"
								className="mb-2"
							/>
						</Form>

						<div className="d-flex justify-content-between mt-4">
							<Button variant="link">← Return to information</Button>
							<Button variant="primary">Continue to payment</Button>
						</div>
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

export default ShippingMethodComponent;
