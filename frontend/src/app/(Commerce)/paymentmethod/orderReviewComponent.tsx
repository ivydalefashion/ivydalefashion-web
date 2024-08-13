'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import styles from '../_styles/paymentmethodComponent.module.scss';

const OrderReview = ({ deliveryMethod, address, deliveryDate }: any) => {
	return (
		<div>
			<Card className={styles.orderReview}>
				<Card.Header>Order Review</Card.Header>
				<Card.Body>
					<div className={styles.reviewItem}>
						<strong>Delivery Method</strong>
						<p>{deliveryMethod}</p>
					</div>
					<div className={styles.reviewItem}>
						<strong>Delivery Address</strong>
						<p>{address}</p>
					</div>
					<div className={styles.reviewItem}>
						<strong>Delivery by</strong>
						<p>{deliveryDate}</p>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default OrderReview;
