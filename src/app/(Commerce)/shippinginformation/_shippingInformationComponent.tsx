'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import styles from '../_styles/shippingInformationComponent.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AlertDismissible from '../_components/DismissableAlert';
import { useRouter } from 'next/navigation';

// Schema:
const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required.'),
	country: yup.string().required('Please select a country'),
	firstname: yup.string().required('First name is required.'),
	lastname: yup.string().required('Last name is required.'),
	companyname: yup.string(),
	address: yup.string().required('Address is required.'),
	city: yup.string().required('City is required.'),
	province: yup.string().required('Province is required.'),
	suburb: yup.string(),
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
		router.push('/shippingmethod');
	};

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<AlertDismissible
					color="orange"
					information={'Fill in all neccessary fields.'}
				></AlertDismissible>
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
								<FormControl
									className={` shadow-none ${styles.input} ${styles.emailInput}`}
									type="email"
									{...register('email')}
									id="email"
									placeholder="Email address"
								/>
							</Form.Group>

							{/* Email me news: */}
							<Form.Group className="mb-3">
								<Form.Check
									className={styles.checkbox}
									type="checkbox"
									label="Email me news and offers"
								/>
							</Form.Group>

							{/* Region */}
							<h2>Shipping Address</h2>
							<Form.Group className="mb-3">
								{errors.country && (
									<span className={styles.errorMessage}>
										{errors.country.message}
									</span>
								)}
								<Form.Select
									className={` shadow-none ${styles.input} `}
									{...register('country')}
									id="Shipping Address"
								>
									<option></option>
									<option>Mzansi</option>
								</Form.Select>
							</Form.Group>

							{/* First name and Last name */}
							<Row className="mb-3">
								<Col className={`mb-3`} xs={12} md={6} lg={6}>
									{errors.firstname && (
										<span className={styles.errorMessage}>
											{errors.firstname.message}
										</span>
									)}
									<Form.Control
										className={` shadow-none ${styles.input} `}
										placeholder="First Name"
										type="text"
										{...register('firstname')}
										id="firstname"
									/>
								</Col>
								<Col xs={12} md={6} lg={6}>
									{errors.lastname && (
										<span className={styles.errorMessage}>
											{errors.lastname.message}
										</span>
									)}
									<Form.Control
										className={` shadow-none ${styles.input} `}
										type="text"
										{...register('lastname')}
										id="lastname"
										placeholder="Last Name"
									/>
								</Col>
							</Row>

							{/* Company name */}
							<Form.Group className="mb-3">
								{errors.companyname && (
									<span className={styles.errorMessage}>
										{errors.companyname.message}
									</span>
								)}
								<Form.Control
									{...register('companyname')}
									type="text"
									placeholder="Company Name"
									className={` shadow-none ${styles.input} `}
								/>
							</Form.Group>

							{/* Address */}
							<Form.Group className="mb-3">
								{errors.address && (
									<span className={styles.errorMessage}>
										{errors.address.message}
									</span>
								)}
								<Form.Control
									placeholder="Address"
									{...register('address')}
									type="text"
									className={` shadow-none ${styles.input} `}
								/>
							</Form.Group>

							{/* Apartment */}
							<Form.Group className="mb-3">
								<Form.Control
									placeholder="Suburb"
									{...register('suburb')}
									type="text"
									className={` shadow-none ${styles.input} `}
								/>
							</Form.Group>

							{/*  City, province, postal code */}
							<Row className="mb-3">
								<Col>
									<Form.Control
										placeholder="City"
										{...register('city')}
										type="text"
										className={` shadow-none ${styles.input} `}
									/>
								</Col>
								<Col>
									<Form.Control
										placeholder="Province"
										{...register('province')}
										type="text"
										className={` shadow-none ${styles.input} `}
									/>
								</Col>
								<Col>
									<Form.Control
										placeholder="Postal Code"
										{...register('postalcode')}
										type="text"
										className={` shadow-none ${styles.input} `}
									/>
								</Col>
							</Row>

							{/* Phone number */}
							<Form.Group className="mb-3">
								<Form.Control
									placeholder="Phone Number"
									{...register('phonenumber')}
									type="text"
									className={` shadow-none ${styles.input} `}
								/>
							</Form.Group>

							{/* Save info for next time */}
							<Form.Group className="mb-3">
								<Form.Check
									className={styles.checkbox}
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
									onClick={handleContinueToShipping}
									className={styles.continueToButtonButton}
									variant="primary"
								>
									Continue to shipping
								</Button>
							</div>
						</Form>
					</Col>
					<Col className={styles.summaryCol} md={4}>
						<div className={styles.summaryContainer}>
							<h3>Order Summary</h3>
							<p>1 Item: R350</p>
							<p>Delivery: R50</p>
							<hr />
							<h4 className={styles.paymentAmountText}>
								TO PAY: <span className={styles.paymentAmount}>R354</span>{' '}
							</h4>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ShippingInformationComponent;
