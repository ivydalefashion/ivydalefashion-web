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
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<ListGroup variant="flush">
					{cartItems.map((item, index) => (
						<AnimatedComponent key={index}>
							<ListGroup.Item className={styles.cartItem}>
								<Row className={styles.cartRow}>
									<Col className={styles.imageCol} lg={2} xs={3}>
										<ResponsiveImage
											className={styles.image}
											alt=""
											src={item.image}
											height={50}
											width={50}
										/>
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
							</ListGroup.Item>
						</AnimatedComponent>
					))}
				</ListGroup>
				<AnimatedComponent>
					<ListGroup.Item className={styles.totalItem}>
						<Row className={styles.totalRow}>
							<Col xs={8}>
								<p>TOTAL</p>
							</Col>
							<Col xs={4} className={styles.totalPrice}>
								<p>R{total}</p>
							</Col>
						</Row>
					</ListGroup.Item>
				</AnimatedComponent>
				<AnimatedComponent>
					<ListGroup.Item className={styles.checkoutItem}>
						<Row className={styles.checkoutRow}>
							<Col>
								<Button variant="dark" className={styles.checkoutButton}>
									CHECKOUT
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				</AnimatedComponent>
			</Container>
		</div>
	);
};

export default CartPage;
