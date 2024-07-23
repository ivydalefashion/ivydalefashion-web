'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../_styles/brandComponent.module.scss';
import ImageCard from '../_components/ImageCard';
import ResponsiveImage from '../_components/ResponsiveImage';

const BrandComponent = () => {
	let adidasLogo = '/adidasLogo.png';

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>

				{/* First row */}
				<Row className={styles.brandHeaderRow}>
					<Col className={styles.logoCol} lg={4} md={4} sm={12}>
						<ResponsiveImage
							src={adidasLogo}
							alt="water"
							width={100}
							height={100}
						></ResponsiveImage>
					</Col>

					<Col className={styles.detailsCol} lg={8} md={8} sm={12}>
						<Row style={{ width: '100%' }}>
							<h3>ADIDAS</h3>
						</Row>

						<br />

						<Row>
							<p>
								xxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx
								xxxxxxxxxxxxxxxxxxxxxxxxxxxx
							</p>
						</Row>
					</Col>
				</Row>

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

						{[1,2,3,4,5,6].map((item: any)=>
						(
							<Card className={styles.card} style={{ width: '20rem' }}>
								<ResponsiveImage
									src={'/orangeHoodie.png'}
									alt={`New Arrival `}
									height={100}
									width={100}
								></ResponsiveImage>
								
								<Card.Body className={` ${styles.cardBody}`}>
									<Card.Title className={`${styles.titleText}`}>Manchester united jersey 2022 Away</Card.Title>
									<Card.Text  className={`${styles.priceText}`}>R600</Card.Text>
									<Button className={`${styles.addToCartButton}`} variant='success'>Add to cart</Button>
								</Card.Body>
							</Card>
						))}

						
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BrandComponent;
