'use client';

// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from '../_styles/shippingMethodComponent.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ShippingMethodComponent = () => {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {}, []);

	const handleContinueToPayment = () => {
		router.push('/paymentmethod');
	};

	return (
		<div className={styles.main}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={styles.mainMotionDiv}
			>
			
			<Container className={styles.breadCrumbContainer}>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						{/* <li className="breadcrumb-item"><a href="#">Delivery</a></li> */}
						<li className="breadcrumb-item"><a href="#">Shipping Information</a></li>
						<li className="breadcrumb-item active" aria-current="page">Shipping Method</li>
					</ol>
				</nav>
			</Container>
			
				<Container className={styles.mainContainer}>

				


					<Row className={styles.mainRow}>
						<Col className={styles.leftCol} md={8}>
							<motion.div
								whileHover={{ scale: 1.001 }}
								className={` ${styles.contactMotionDiv} ${styles.border}`}
							>
								<Row>
									<Col>
										<strong>Contact</strong>
										<p>ivydale@gmail.com</p>
									</Col>
									<Col className="text-end">
										<Button variant="link">Change</Button>
									</Col>
								</Row>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.001 }}
								className={`${styles.shipToDiv} ${styles.border}`}
							>
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
							</motion.div>

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
								<Button className={styles.returnToInformation} variant="link">
									← Return to information
								</Button>
								<Button
									className={styles.continueToPayment}
									onClick={handleContinueToPayment}
									variant="primary"
								>
									Continue to payment
								</Button>
							</div>
						</Col>
						<Col className={styles.rightCol} md={4}>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className={`border p-3 ${styles.border}`}
							>
								<h3>Order Summary</h3>
								<p>1 Item: R350</p>
								<p>Delivery: R50</p>
								<hr />
								<h4>TO PAY: R354</h4>
							</motion.div>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</div>
	);
};

export default ShippingMethodComponent;
