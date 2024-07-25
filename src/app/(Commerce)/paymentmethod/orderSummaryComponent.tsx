'use client';

import React from 'react'
import { Card, Button } from 'react-bootstrap';
import styles from '../_styles/paymentmethodComponent.module.scss';

const OrderSummary = ({ total, delivery } : any) => {
	return (
		<div>
			<Card className={styles.orderSummary}>
				<Card.Header>Order Summary</Card.Header>
				<Card.Body>
					<div className={styles.summaryItem}>
						<span>1 item</span>
						<span>R{total}</span>
					</div>
					<div className={styles.summaryItem}>
						<span>Delivery</span>
						<span>R{delivery}</span>
					</div>
					<div className={`${styles.summaryItem} ${styles.total}`}>
						<span>TO PAY</span>
						<span>R{total + delivery}</span>
					</div>
					<Button variant="danger" className={styles.confirmButton}>
						Confirm Order
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default OrderSummary;
