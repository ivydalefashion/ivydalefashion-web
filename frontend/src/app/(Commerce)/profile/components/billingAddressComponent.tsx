'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const BillingAddressComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div>
			<Container>
				<Row>
					<h1>BILLING </h1>
				</Row>
			</Container>
		</div>
	);
};

export default BillingAddressComponent;
