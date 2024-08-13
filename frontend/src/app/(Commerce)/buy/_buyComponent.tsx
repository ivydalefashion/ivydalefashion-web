'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../_styles/buyComponent.module.scss';
import AlertDismissible from '../_components/DismissableAlert';
import Link from 'next/link';

const BuyComponent = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<AlertDismissible
					color=""
					heading="Item has been added to your cart"
					information={``}
				></AlertDismissible>
				<h1 className={styles.mainHeader}>BUY PAGE</h1>
				<Row className={styles.mainRow}>
					<Col className={styles.imagesCol} md={6}>
						<Row>
							<Col xs={2}>
								{[1, 2, 3, 4].map((num) => (
									<div key={num} className="mb-2">
										<Image
											src={`/adidasMANU.jpg`}
											alt={`Thumbnail ${num}`}
											width={50}
											height={50}
											layout="responsive"
										/>
									</div>
								))}
							</Col>
							<Col xs={10}>
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									<Image
										src="/adidasMANU.jpg"
										alt="Skull Hoodie"
										width={500}
										height={500}
										layout="responsive"
									/>
								</motion.div>
							</Col>
						</Row>
					</Col>
					<Col className={styles.descriptionCol} md={6}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h2>SKULL HOODIE</h2>
							<h3>R350</h3>
							<p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>

							<Form className={styles.form}>
								<Form.Group className="mb-3">
									<Form.Label>SIZE</Form.Label>
									<div className={styles.sizeOptions}>
										{['S', 'M', 'L', 'XL'].map((size) => (
											<div key={size} className={styles.sizeOption}>
												<input
													type="radio"
													id={`size-${size}`}
													name="size"
													className={styles.sizeRadio}
												/>
												<label
													htmlFor={`size-${size}`}
													className={styles.sizeLabel}
												>
													{size}
												</label>
											</div>
										))}
									</div>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>QUANTITY</Form.Label>
									<div className="d-flex align-items-center">
										{/* Decrement button */}
										<Button
											className={styles.decrementButton}
											variant="outline-secondary"
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
										>
											-
										</Button>

										{/* Quantity display */}
										<Form.Control
											className={`${styles.quantityDisplay} mx-2`}
											type="number"
											value={quantity}
											onChange={(e) =>
												setQuantity(parseInt(e.target.value) || 1)
											}
										/>

										{/* Increment button */}
										<Button
											className={styles.incrementButton}
											variant="outline-secondary"
											onClick={() => setQuantity(quantity + 1)}
										>
											+
										</Button>
									</div>
								</Form.Group>

								<Button variant="outline-dark" className={styles.addToCartButton}>
									ADD TO CART
								</Button>

								<Link href={`/cart`}>
									<Button variant="outline-dark" className={styles.buyNowButton}>
										BUY NOW
									</Button>
								</Link>
							</Form>
						</motion.div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BuyComponent;
