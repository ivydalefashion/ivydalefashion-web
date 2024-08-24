'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import styles from '../../_styles/ordersComponent.module.scss'

// There was no need to use font awesome, could have used React icons. You will fix when you have time
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'


// 
const OrdersComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [orders, setOrders] = useState<any>([]);

	return (
		<div className={styles.main}>
			{
				orders.length > 0 ? (
					<Container className={styles.mainContainer}>
						<Row className={styles.mainRow}>
							<h1>Orders   1 2 3</h1>
						</Row>
					</Container>
				): (
					<Container className={styles.mainContainer}>
						<Row className={styles.mainRow}>
							<Col className={styles.col}>
								<FontAwesomeIcon className={styles.icon} icon={faBoxOpen} size="4x" />
								<p>You don't have any orders yet.</p>
								<hr />
								<Button className={styles.goToShoppingButton}>Go to shopping</Button>
							</Col>
							
						</Row>
					</Container>
				)
			}
			
		</div>
	);
};

export default OrdersComponent;
