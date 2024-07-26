'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
// import styles from '../_styles/signinComponent.module.scss';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AlertDismissible from '../_components/DismissableAlert';

// Schema:
const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required.'),
	password: yup.string().required('Password is required.'),
});

const BankCardComponent = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data: any) => {
		console.log(data);
		// Handle form submission here

		router.push('/commerce');
	};

	return (
		<div>
			bank card component
		</div>
	);
};

export default BankCardComponent;
