'use client';
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../_styles/commerceComponent.module.scss';
import Header from '../_components/Header';

const CommerceComponent: React.FC = () => {
	return (
		<div className={styles.landingPage}>
			<Header></Header>

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
								{[1, 2, 3, 4].map((itemIdx) => (
									<Col key={itemIdx} xs={6} md={3}>
										<motion.div
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.3 }}
										>
											<img
												className="d-block w-100"
												src={`https://s3-alpha-sig.figma.com/img/76fe/2c36/519ab52c5174bbd57b6b632a04721578?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WRO1pv~ZLFYmxnayA61jG7KYgVc5X34Xy9NoV-qepZbjiiWdFboVEsyBnAJ2J2eYWYBWcR3lVQqLTvpXdrkvp-P~8GHIhmcctrVSA6b9wiI0ICPo3zUOSXPmmMzz2jAwoPwqy-6c0Eh8a6MI37N40QD-pJhgC6hNaZ6mP307zDreJoMjgqhl0IPffQTAJF3ae5t8QCvsbUE5VOi~MGe2TcW6sS1WLqX7gVI6NaplMBziKlFyiYwrQDaQmbr2B6GM-f-T8tz9J2G8zAozPUmcBlhGIi0nA1cYqVMgYJ0MeBk5xDEGTjcEwoHIiyPCjyyrtZaUR2~UTHWYJQSo9TwW7g__`}
												alt={`New Arrival ${idx * 2 + itemIdx}`}
											/>
											<h3>ITEM NAME</h3>
											<p>R350</p>
										</motion.div>
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
						<img
							src="https://s3-alpha-sig.figma.com/img/f664/d5be/0bb33fce4b3c153d5be3e5f4ba9dc18e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=feb2bAeX~Ya3Ksy3DKcZPQHvv5uYtH1d6MlgCcMxHByiOYyWFA9xEfzNoOLQh1LWbX23fYYV4a-qYM1ijO9E4oakqoajpU3-OJ68CkJmiqfkq6sjHwJxPJbRtWilJ41GigmGBNocR67eYlHhNrHg~jbMH0R0i~bouz9eIMJE6EMKi-gEA8TrH2FuxGD6OdgojIrVomaWjV~1wz4wE1GItAGT-x1F6brPhmtai4oI7DK7b6YbGAtt2KG6rZc57jRG8P0nmeboDv5NKGXfJppelFrCa1Gv1DhTNuKJMefEPMrVSZ3XF50XpTRxAinEICFTvKN58lv~YgCcoOiaFKY-1A__"
							alt="High End Street Culture"
						/>
						<div className={styles.bannerText}>
							<h2>HIGH END STREET CULTURE</h2>
						</div>
					</div>
				</Container>
			</div>

			<h5>something here too</h5>

			{/*The end of the div */}
		</div>
	);
};

export default CommerceComponent;
