'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../_styles/brandsComponent.module.scss';
import ResponsiveImage from '../_components/ResponsiveImage';
import Link from 'next/link';

const BrandLogo = ({ src, alt, description }: any) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={styles.logoContainer}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<ResponsiveImage
				className={styles.image}
				src={src}
				alt={alt}
				width={100}
				height={100}
			/>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						className={styles.overlay}
						initial={{ y: '100%' }}
						animate={{ y: 0 }}
						exit={{ y: '100%' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<p>{description}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};


//  main component:
const BrandsComponent = () => {
	const brands = [
		{
			logo: '/adidasLogo.png',
			name: 'Adidas',
			description: 'Adidas is a German multinational corporation...',
		},
		{
			logo: '/nikelogo.png',
			name: 'Nike',
			description: 'Nike is an American multinational corporation...',
		},
		{
			logo: '/pumalogo.png',
			name: 'Puma',
			description: 'Puma SE is a German multinational corporation...',
		},
		{
			logo: '/dickieslogo.png',
			name: 'Dickies',
			description: 'Dickies is an American workwear company...',
		},
	];

	return (
		<div className={styles.main}>
			<Container className={styles.container}>
				<Row className={styles.titleRow}>
					<h3>Shop Local and International Brands!</h3>
				</Row>
				<Row className={styles.logosRow}>
					{brands.map((brand, index) => (
						<Col key={index} lg="4" md="4" sm="12">
							<Link href="/brand">
								<BrandLogo
									src={brand.logo}
									alt={brand.name}
									description={brand.description}
								/>
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default BrandsComponent;
