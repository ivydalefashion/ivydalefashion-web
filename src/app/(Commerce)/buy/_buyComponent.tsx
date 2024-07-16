'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BuyComponent = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div>
			<Container className="mt-5">
				<h1 className="mb-4">BUY PAGE</h1>
				<Row>
					<Col md={6}>
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
					<Col md={6}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h2>SKULL HOODIE</h2>
							<h3>R350</h3>
							<p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>

							<Form>
								<Form.Group className="mb-3">
									<Form.Label>SIZE</Form.Label>
									<div>
										{['S', 'M', 'L', 'XL'].map((size) => (
											<Form.Check
												inline
												type="radio"
												label={size}
												name="size"
												id={`size-${size}`}
												key={size}
											/>
										))}
									</div>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>QUANTITY</Form.Label>
									<div className="d-flex align-items-center">
										<Button
											variant="outline-secondary"
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
										>
											-
										</Button>
										<Form.Control
											type="number"
											value={quantity}
											onChange={(e) =>
												setQuantity(parseInt(e.target.value) || 1)
											}
											className="mx-2"
											style={{ width: '60px' }}
										/>
										<Button
											variant="outline-secondary"
											onClick={() => setQuantity(quantity + 1)}
										>
											+
										</Button>
									</div>
								</Form.Group>

								<Button variant="outline-dark" className="w-100 mb-2">
									ADD TO CART
								</Button>
								<Button variant="secondary" className="w-100">
									BUY NOW
								</Button>
							</Form>
						</motion.div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BuyComponent;
