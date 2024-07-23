'use client';

import React, { useState } from 'react';
import { Alert, Button, Col, Row, Container } from 'react-bootstrap';
import styles from './_styles_components/DismissableAlert.module.scss'; // styles

export type alertProps = {
	color: string;
	heading?: string;
	information?: any;
};

const AlertDismissible = (props: alertProps) => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<Alert
				variant="warning"
				className={` ${styles.alert} ${props.color === 'blue' ? styles.success : styles.error}`}
				onClose={() => setShow(false)}
				dismissible
			>
				<Alert.Heading>
					{' '}
					{props.heading ? (
						<div>{props.heading}</div>
					) : (
						<div>Oops! Looks like we have an error</div>
					)}{' '}
				</Alert.Heading>
				<div>{props.information ? <div>{props.information}</div> : <div></div>}</div>
			</Alert>
		</div>
	);
};

export default AlertDismissible;
