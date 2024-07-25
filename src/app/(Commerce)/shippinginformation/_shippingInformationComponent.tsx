'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import styles from '../_styles/shippingInformationComponent.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AlertDismissible from '../_components/DismissableAlert';
import { useRouter } from 'next/navigation';

// Schema:
const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required.'),
	firstname: yup.string().required('First name is required.'),
	lastname: yup.string().required('Last name is required.'),
	address: yup.string().required('Address is required.'),
	city: yup.string().required('City is required.'),
	province: yup.string().required('Province is required.'),
	postalcode: yup.string().required('Postal code is required.'),
	phonenumber: yup.string().required('Phone number is required.'),
});

const ShippingInformationComponent = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const handleContinueToShipping = () => {
		router.push('/shippingmethod');
	};

	const onSubmit = (data: any) => {
		console.log(data);
		// Handle form submission here
	};

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<Row className={styles.mainRow}>
					<Col md={8}>
						<h2>Contact</h2>

						<Form onSubmit={handleSubmit(onSubmit)}>
							{/* Email: */}
							<Form.Group>
								{errors.email && (
									<span className={styles.errorMessage}>
										{errors.email.message}
									</span>
								)}
								<input
									className={`form-control shadow-none ${styles.input} ${styles.emailInput}`}
									type="email"
									{...register('email')}
									id=""
									placeholder="Email address"
								/>
							</Form.Group>

							{/* Email me news: */}
							<Form.Group className="mb-3">
								<Form.Check type="checkbox" label="Email me news and offers" />
							</Form.Group>

							{/* Region */}
							<h2>Shipping Address</h2>
							<Form.Group className="mb-3">
								<Form.Select>
									<option>Country/Region</option>
									{/* Add more country options */}
								</Form.Select>
							</Form.Group>

							{/* First name and Last name */}
							<Row className="mb-3">
								<Col>
									<Form.Control placeholder="First Name" />
								</Col>
								<Col>
									<Form.Control placeholder="Last Name" />
								</Col>
							</Row>

							{/* Company name */}
							<Form.Group className="mb-3">
								<Form.Control placeholder="Company Name" />
							</Form.Group>

							{/* Address */}
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

							{/* Phone number */}
							<Form.Group className="mb-3">
								<Form.Control placeholder="Phone Number" />
							</Form.Group>

							{/* Save info for next time */}
							<Form.Group className="mb-3">
								<Form.Check
									type="checkbox"
									label="Save this information for next time"
								/>
							</Form.Group>

							{/* Submit button */}
							<div className="d-flex justify-content-between">
								<Button className={styles.returnToCartButton} variant="link">
									← Return to cart
								</Button>
								<Button
									className={styles.continueToButtonButton}
									type="submit"
									variant="primary"
								>
									Continue to shipping
								</Button>
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

export default ShippingInformationComponent;
