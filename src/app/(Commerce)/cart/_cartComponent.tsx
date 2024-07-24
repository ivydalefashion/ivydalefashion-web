'use client';

import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import styles from '../_styles/cartComponent.module.scss';
import ResponsiveImage from '../_components/ResponsiveImage';
import AnimatedComponent from '../_components/AnimatedComponent';

interface CartItem {
	image: string;
	name: string;
	size: string;
	price: number;
	description: string;
}

const CartPage = () => {
	const cartItems: CartItem[] = [
		{
			image: '/adidasMANU.jpg',
			name: 'SKULL HOODIE X1',
			size: 'SMALL',
			price: 350,
			description: 'Comfortable cotton blend hoodie with skull print.',
		},
		{
			image: '/adidasMANU.jpg',
			name: 'SKULL HOODIE X1',
			size: 'SMALL',
			price: 350,
			description: 'Comfortable cotton blend hoodie with skull print.',
		},
		{
			image: '/adidasMANU.jpg',
			name: 'SKULL HOODIE X1',
			size: 'SMALL',
			price: 350,
			description: 'Comfortable cotton blend hoodie with skull print.',
		},
		{
			image: '/adidasMANU.jpg',
			name: 'SKULL HOODIE X1',
			size: 'SMALL',
			price: 350,
			description: 'Comfortable cotton blend hoodie with skull print.',
		},
	];

	const total = cartItems.reduce((sum, item) => sum + item.price, 0);

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<h1 className={styles.cartTitle}>Your Cart</h1>
				<Row>
					<Col md={8}>
						<ListGroup variant="flush">
							{cartItems.map((item, index) => (
								<AnimatedComponent key={index}>
									<ListGroup.Item className={styles.cartItem}>
										<Row className={styles.cartRow}>
											<Col xs={3} className={styles.imageCol}>
												<ResponsiveImage
													className={styles.image}
													alt={item.name}
													src={item.image}
													height={100}
													width={100}
												/>
											</Col>
											<Col xs={6} className={styles.detailsCol}>
												<h5>{item.name}</h5>
												<p className={styles.itemSize}>Size: {item.size}</p>
												<p className={styles.itemDescription}>
													{item.description}
												</p>
											</Col>
											<Col xs={3} className={styles.priceCol}>
												<p className={styles.price}>R{item.price}</p>
												<Button
													variant="link"
													className={styles.removeButton}
												>
													Remove
												</Button>
											</Col>
										</Row>
									</ListGroup.Item>
								</AnimatedComponent>
							))}
						</ListGroup>
					</Col>
					<Col md={4}>
						<AnimatedComponent>
							<div className={styles.cartSummary}>
								<h4 className={styles.summaryTitle}>Order Summary</h4>
								<div className={styles.subtotalRow}>
									<span>Subtotal</span>
									<span className={styles.subtotalPrice}>R{total}</span>
								</div>
								<div className={styles.totalRow}>
									<span>Total</span>
									<span className={styles.totalPrice}>R{total}</span>
								</div>
								<Button variant="dark" className={styles.checkoutButton}>
									Proceed to Checkout
								</Button>
							</div>
						</AnimatedComponent>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CartPage;
