'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../_styles/exploreComponent.module.scss';
import ImageCard from '../_components/ImageCard';
import ResponsiveImage from '../_components/ResponsiveImage';
import axios from 'axios';
import { API_ROUTES } from '../../api/route';
import axiosInstance from '@/app/utils/axiosInstance';

const BrandComponent = () => {
	let adidasLogo = '/adidasLogo.png';

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts();
				setProducts(data);
			} catch (err) {
				setError('Failed to load products.');
			} finally {
				setLoading(false);
			}
		};

		loadProducts();
	}, []);

	// Function to fetch all products:
	const fetchProducts = async () => {
		try {
			const response = await axios.get(API_ROUTES.PRODUCTS.GET_ALL, {
				headers: {
					Authorization: `Bearer YOUR_ACCESS_TOKEN`,
				},
			});
			return response.data;
		} catch (error) {
			console.error('Error fetching products:', error);
			throw error;
		}
	};

	// Function to add items to cart: // we have not implemented the add to cart functionality yet:
	const addToCart = async (productId: string, quantity: number) => {
		try {
			const response = await axiosInstance.post("/api/cart/", {
			product: productId,
			quantity: quantity,
			});
			console.log("Added to cart:", response.data);
		} catch (error) {
			console.error("Failed to add to cart", error);
		}
	};

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				{/* Second row */}
				<Row className={styles.secondaryRow}>
					<Col className={styles.categoriesCol} lg={2} md={2} sm={12}>
						<ul className="list-group list-group-flush ">
							<li className="list-group-item ">
								SHIRTS
								<span className="badge badge-primary badge-pill">14</span>
							</li>

							<li className="list-group-item">
								HOODIES
								<span className="badge badge-primary badge-pill">14</span>
							</li>
						</ul>
					</Col>

					<Col className={styles.imagesCol} lg={10} md={10} sm={12}>
						{/* Card with image */}

						<Row className={styles.imagesColTitleRow}>
							<h1>UPDATE</h1>
						</Row>

						<Row>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 66, 77].map((item: any) => (
								<Col className={``} lg={2} md={4} sm={12}>
									<Card className={styles.card}>
										<ResponsiveImage
											src={'/orangeHoodie.png'}
											alt={`New Arrival `}
											height={80}
											width={80}
										></ResponsiveImage>

										<Card.Body className={` ${styles.cardBody}`}>
											<Card.Title className={`${styles.titleText}`}>
												Manchester united jersey 2022 Away
											</Card.Title>
											<Card.Text className={`${styles.priceText}`}>
												R600
											</Card.Text>
											{/* <Button
												className={`${styles.addToCartButton}`}
												variant="success"
											>
												Add to cart
											</Button> */}
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BrandComponent;
