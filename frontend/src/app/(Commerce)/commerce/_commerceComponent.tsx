'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { m, motion } from 'framer-motion';
import styles from '../_styles/commerceComponent.module.scss';
import Header from '../_components/Header';
import ResponsiveImage from '../_components/ResponsiveImage';
import Footer from '../_components/Footer';
import { API_ROUTES } from '../../api/route';

type Product = {
	id: string;
	name: string;
	slug: string;
	price: number;
	images?: { url: string }[];
};

type Brand = {
	id: string;
	name: string;
	slug: string;
	logo?: string | null;
};

const CommerceComponent = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [brands, setBrands] = useState<Brand[]>([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const [productRes, brandRes] = await Promise.all([
					fetch(API_ROUTES.PRODUCTS.GET_ALL, { cache: 'no-store' }),
					fetch(API_ROUTES.BRANDS.GET_ALL, { cache: 'no-store' }),
				]);

				const productData = await productRes.json();
				const brandData = await brandRes.json();
				setProducts((productData?.products || []) as Product[]);
				setBrands((brandData || []) as Brand[]);
			} catch (error) {
				console.error('Failed loading commerce data', error);
			}
		};

		loadData();
	}, []);

	const featuredProducts = useMemo(() => products.slice(0, 8), [products]);

	return (
		<div className={styles.landingPage}>
			<Carousel controls={false} indicators={false}>
				<Carousel.Item>
					<div
						className={styles.carouselImage}
						style={{ backgroundImage: 'url("/wideimage.jpg")' }}
					>
						<div className={styles.carouselCaption}>
							<h1>STREET FASHION REDEFINED</h1>
							<Link href="/explore">
								<button className={styles.shopButton}>EXPLORE NOW</button>
							</Link>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div
						className={styles.carouselImage}
						style={{ backgroundImage: 'url("/nikeBanner.webp")' }}
					>
						<div className={styles.carouselCaption}>
							<h1>URBAN STYLE UNLEASHED</h1>
							<Link href="/brands">
								<button className={styles.shopButton}>SHOP BRANDS</button>
							</Link>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div
						className={styles.carouselImage}
						style={{ backgroundImage: 'url("/nikeBanner.webp")' }}
					>
						<div className={styles.carouselCaption}>
							<h1>BOLD LOOKS, BOLD STATEMENTS</h1>
							<button className={styles.shopButton}>GET TO KNOW US!</button>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>

			<Container className={styles.newArrivals}>
				<h2>NEW ARRIVALS</h2>
				<Carousel indicators={false}>
					<Carousel.Item>
						<Row>
							{featuredProducts.length > 0
								? featuredProducts.map((item, itemIdx) => (
										<Col key={item.id} xs={6} md={3}>
											<Link href={`buy/${item.slug}`}>
												<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
													<img
														src={item.images?.[0]?.url || '/orangeHoodie.png'}
														alt={`New Arrival ${itemIdx}`}
														style={{ width: '100%', height: 'auto' }}
													/>
													<h3>{item.name}</h3>
													<p>R{item.price}</p>
												</motion.div>
											</Link>
										</Col>
								  ))
								: null}
						</Row>
					</Carousel.Item>
				</Carousel>
			</Container>

			{/* Slim Banner */}
			<div className={styles.slimBanner}>
				<Container fluid>
					<div className={styles.bannerImageContainer}>
						<ResponsiveImage
							src="/skaters.jpg"
							alt={`New Arrival`}
							height={400}
							width={100}
						></ResponsiveImage>

						<div className={styles.bannerText}>
							<h2>HIGH END STREET CULTURE</h2>
						</div>
					</div>
				</Container>
			</div>

			{/* Shop Local Brands Section */}
			<Container className={styles.shopLocalBrands}>
				<h2>SHOP LOCAL BRANDS</h2>
				<Row>
					<Col xs={12} md={3}>
						<img src="/nikelogo.png" alt="260 Logo" className={styles.mainLogo} />
					</Col>
					{brands.map((brand) => (
						<Col key={brand.id} xs={6} md={3} className={styles.brandLogo}>
							<Link href={`/brand/${brand.slug}`}>
								<img
									src={brand.logo || '/nikelogo.png'}
									alt={brand.name}
									className={styles.mainLogo}
								/>
							</Link>
						</Col>
					))}
				</Row>
				<div className={styles.showMoreButton}>
					<Button variant="outline-dark">SHOW MORE</Button>
				</div>
			</Container>

			{/*The end of the div */}
		</div>
	);
};

export default CommerceComponent;
