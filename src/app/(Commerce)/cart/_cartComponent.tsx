'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../_styles/cartComponent.module.scss';
import ResponsiveImage from '../_components/ResponsiveImage';
import AnimatedComponent from '../_components/AnimatedComponent';

interface CartItem {
	image: string;
	name: string;
	size: string;
	price: number;
}

const CartPage = () => {
	const cartItems: CartItem[] = [
		{ image: '/adidasMANU.jpg', name: 'SKULL HOODIE X1', size: 'SMALL', price: 350 },
		{ image: '/adidasMANU.jpg', name: 'SKULL HOODIE X1', size: 'SMALL', price: 350 },
		{ image: '/adidasMANU.jpg', name: 'SKULL HOODIE X1', size: 'SMALL', price: 350 },
		{ image: '/adidasMANU.jpg', name: 'SKULL HOODIE X1', size: 'SMALL', price: 350 },
	];

	const total = cartItems.reduce((sum, item) => sum + item.price, 0);

	return (
		<div>
			<AnimatedComponent>
				<Container className={styles.cartPage}>
					{cartItems.map((item, index) => (
						<AnimatedComponent key={index}>
							<Row className={styles.cartItem}>
								<Col xs={3}>
									<ResponsiveImage
										alt=""
										src={item.image}
										height={100}
										width={100}
									></ResponsiveImage>
								</Col>
								<Col xs={5}>
									<p>{item.name}</p>
									<p>{item.size}</p>
								</Col>
								<Col xs={2} className={styles.price}>
									R{item.price}
								</Col>
								<Col xs={2} className={styles.removeButton}>
									<Button variant="light" className={styles.removeIcon}>
										×
									</Button>
								</Col>
							</Row>
						</AnimatedComponent>
					))}
					<AnimatedComponent>
						<Row className={styles.totalRow}>
							<Col xs={8}>
								<p>TOTAL</p>
							</Col>
							<Col xs={4} className={styles.totalPrice}>
								<p>R{total}</p>
							</Col>
						</Row>
					</AnimatedComponent>
					<AnimatedComponent>
						<Row className={styles.checkoutRow}>
							<Col>
								<Button variant="dark" className={styles.checkoutButton}>
									CHECKOUT
								</Button>
							</Col>
						</Row>
					</AnimatedComponent>
				</Container>
			</AnimatedComponent>
		</div>
	);
};

export default CartPage;
