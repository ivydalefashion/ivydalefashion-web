'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const PersonalDetails = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<div>
			<Container>
				<Row>
					<h1>Personal details</h1>
				</Row>
			</Container>
		</div>
	);
};

export default PersonalDetails;
