'use client';

import React from 'react';
import Link from 'next/link';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { m, motion } from 'framer-motion';
import styles from '../_styles/commerceComponent.module.scss';
import Header from '../_components/Header';
import ResponsiveImage from '../_components/ResponsiveImage';
import Footer from '../_components/Footer';
import Image from 'next/image';


const CommerceComponent = () => {
	return (
		<div className={styles.landingPage}>
			<Carousel controls={false} indicators={false}>
				<Carousel.Item>
					<div
						className={styles.carouselImage}
						style={{ backgroundImage: 'url("/nikeBanner.webp")' }}
					>
						<div className={styles.carouselCaption}>
							<h1>STREET FASHION REDEFINED</h1>
							<button className={styles.shopButton}>SHOP BRANDS</button>
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
							<button className={styles.shopButton}>EXPLORE NOW</button>
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
							<button className={styles.shopButton}>DISCOVER MORE</button>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>

			<Container className={styles.newArrivals}>
				<h2>NEW ARRIVALS</h2>
				<Carousel indicators={false}>
					{[0, 1].map((_, idx) => (
						<Carousel.Item key={idx}>
						<Row>
							{[
							{ imageString: "/orangeHoodie.png",
								name: "Orange skull biting hoodie",
								price: 600
							},
							{ imageString: "/arsenalshirt.jpg",
								name: "Arsenal 2022/2023 Home kit",
								price: 1800 
							},
							{ imageString: "/adidasMANU.jpg",
								name: "Manchester united 2022/2023 Home kit",
								price: 1800  
							},{ imageString: "/greyHoodie.png",
								name: "Run DMC sweater",
								price: 1800  
							}
							].map((item, itemIdx) => (

							<Col key={itemIdx} xs={6} md={3}>
								<Link href="buy/1">
								<motion.div
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								>
									<Image
									src={item.imageString}
									alt={`New Arrival ${idx * 3 + itemIdx}`} 
									height={100}
									width={100}
									layout="responsive"
									/>
									<h3>{item.name}</h3>
									<p>R{item.price}</p>
								</motion.div>
								</Link>
							</Col>
							))}
						</Row>
						</Carousel.Item>
					))}
					</Carousel>

			</Container>

			{/* Slim Banner */}
			<div className={styles.slimBanner}>
				<Container fluid>
					<div className={styles.bannerImageContainer}>
						<ResponsiveImage
							src="https://images.pexels.com/photos/6153357/pexels-photo-6153357.jpeg?auto=compress&cs=tinysrgb&w=800"
							alt={`New Arrival`}
							height={100}
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
					{[...Array(7)].map((_, index) => (
						<Col key={index} xs={6} md={3} className={styles.brandLogo}>
							<Link href="/brand">
								<img
									src="/nikelogo.png"
									alt="260 Logo"
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
