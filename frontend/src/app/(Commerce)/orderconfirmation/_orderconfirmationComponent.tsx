'use client';

// pages/order-confirmation.js
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import OrderSummary from './orderSummaryComponent';
import ItemsShipped from './itemShippedComponent';
import styles from '../_styles/orderconfirmationComponent.module.scss';
import { Order } from '../_components/Interfaces';

const OrderConfirmation = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [orderData, setOrderData] = useState<any>(null);

	useEffect(() => {
		// Simulate API call
		setTimeout(() => {
			setOrderData({
				orderNumber: '123456',
				orderDate: '12 May 2023',
				orderTotal: '3100',
				shippingAddress: {
					street: '65 IvyDale Street',
					city: 'Polokwane',
					postalCode: '0741',
				},
				items: [
					{
						name: 'SKULL HOODIE X1',
						size: 'S',
						quantity: 1,
						price: 'R350',
					},
				],
				subTotal: 'R350',
				delivery: 'R65',
				total: 'R304',
			});
			setIsLoading(false);
		}, 2000); // Simulate 2 second load time
	}, []);

	return (
		<div>
			<Container className={styles.orderConfirmation}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-center mb-4">Your Order is On Its Way To You.....</h1>
					<div className="text-center mb-5">
						<Button variant="danger">Track Your Order</Button>
					</div>

					<OrderSummary isLoading={isLoading} orderData={orderData} />
					<ItemsShipped isLoading={isLoading} items={orderData?.items} />
				</motion.div>
			</Container>
		</div>
	);
};

export default OrderConfirmation;
