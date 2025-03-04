'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../_styles/exploreComponent.module.scss';
import ImageCard from '../_components/ImageCard';
import ResponsiveImage from '../_components/ResponsiveImage';

const BrandComponent = () => {
	let adidasLogo = '/adidasLogo.png';

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
							{[1, 2, 3, 4, 5, 6].map((item: any) => (
								<Col className={``} lg={2} md={2} sm={12}>
									<Card className={styles.card} style={{}}>
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
											<Button
												className={`${styles.addToCartButton}`}
												variant="success"
											>
												Add to cart
											</Button>
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
