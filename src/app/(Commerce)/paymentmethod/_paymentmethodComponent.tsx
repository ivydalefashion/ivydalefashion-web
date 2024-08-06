'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../_styles/paymentmethodComponent.module.scss';

// components:
import OrderReview from './orderReviewComponent';
import OrderSummary from './orderSummaryComponent';

const PaymentMethodComponent = () => {
	const [paymentMethod, setPaymentMethod] = useState('');

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="#">Shipping Information</a>
						</li>
						<li className="breadcrumb-item" aria-current="page">
							<a href="#">Shipping Method</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Payment method
						</li>
					</ol>
				</nav>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Row className={styles.mainRow}>
						<Col md={8}>
							<Form>
								<h2>How would you like to pay?</h2>
								{[
									'Credit/Debit Card',
									'EFT with Ozow',
									'EFT with PayFast',
									'Payflex',
								].map((method) => (
									<Form.Check
										key={method}
										type="radio"
										id={method}
										label={method}
										name="paymentMethod"
										value={method}
										onChange={(e) => setPaymentMethod(e.target.value)}
										className={styles.customRadio}
									/>
								))}
							</Form>
							<div className={styles.buttonGroup}>
								<Button variant="secondary">Return to shipping</Button>
								<Button variant="primary">Make payment</Button>
							</div>
						</Col>

						<Col md={4}>
							<OrderSummary total={250} delivery={54} />
							<OrderReview
								deliveryMethod="Delivery"
								address="123 Main Street, Polokwane, 0699, 0606767676"
								deliveryDate="23 May 2023 - Standard delivery - R65"
							/>
						</Col>
					</Row>
				</motion.div>
			</Container>
		</div>
	);
};

export default PaymentMethodComponent;
