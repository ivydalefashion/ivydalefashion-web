'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup, Card } from 'react-bootstrap';
import styles from '../../_styles/returnComponent.module.scss';

import ColoredTitle from './ColoredTitle'


// --------------------------

const ReturnsComponents = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div className={styles.main}>
			<Container className={styles.mainContainer}>
				<Row>
					<ColoredTitle title={'Returns'}></ColoredTitle>
					<Card className={styles.card}>
						<Card.Body>
							<Row className="align-items-center">
								<Col>
									<strong>Your Name</strong>
									<div>Romeo Mamphekgo</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					</Row>
			</Container>
		</div>
	);
};

export default ReturnsComponents;
