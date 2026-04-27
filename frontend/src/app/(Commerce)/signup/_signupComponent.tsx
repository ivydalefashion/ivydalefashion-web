'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from '../_styles/signupComponent.module.scss';
import { Container, Row } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

// Schema:
const schema = yup.object().shape({
	firstname: yup.string().required('First name  is required.'),
	lastname: yup.string().required('Last name  is required.'),
	email: yup.string().email('Invalid email').required('Email is required.'),
	password: yup
		.string()
		.required('Password is required.')
		.min(6, 'Password must be at least 6 characters.'),
	confirmPassword: yup
		.string()
		.required('Confirm Password is required.')
		.oneOf([yup.ref('password')], 'Passwords must match.'),
});

const SignupComponent = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = async (data: {
		firstname: string;
		lastname: string;
		email: string;
		password: string;
	}) => {
		setIsLoading(true);
		setErrorMessage('');
		try {
			const response = await fetch('/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName: data.firstname,
					lastName: data.lastname,
					email: data.email,
					password: data.password,
				}),
			});

			const result = await response.json();
			if (!response.ok) {
				throw new Error(result?.message || 'Failed to create account.');
			}

			if (result?.token) {
				localStorage.setItem('ivydale_token', result.token);
			}
			router.push('/commerce');
		} catch (error: any) {
			setErrorMessage(error.message || 'Unable to sign up right now.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<Container className={`${styles.mainContainer} `}>
				<Row>
					<h2 className={` ${styles.primaryLabel}`}>Be a part of us.</h2>
					<label className={`${styles.secondaryLabel}`}>
						Please fill in the fields below:
					</label>
				</Row>

				<Row>
					{errorMessage ? (
						<p className={styles.errorMessage}>{errorMessage}</p>
					) : null}

					<form onSubmit={handleSubmit(onSubmit)} className={`${styles.mainForm}`}>
						<Form.Group>
							{errors.firstname && (
								<span className={styles.errorMessage}>
									{errors.firstname.message}
								</span>
							)}
							<input
								className={`form-control shadow-none ${styles.input} ${styles.firtnameInput}`}
								type="text"
								placeholder="First name"
								{...register('firstname')}
							/>
						</Form.Group>

						<Form.Group>
							{errors.lastname && (
								<span className={styles.errorMessage}>
									{errors.lastname.message}
								</span>
							)}
							<input
								className={`form-control shadow-none ${styles.input} ${styles.lastnameInput}`}
								type="text"
								{...register('lastname')}
								placeholder="Last name"
							/>
						</Form.Group>

						<Form.Group>
							{errors.email && (
								<span className={styles.errorMessage}>{errors.email.message}</span>
							)}
							<input
								className={`form-control shadow-none ${styles.input} ${styles.emailInput}`}
								type="email"
								{...register('email')}
								id=""
								placeholder="Email address"
							/>
						</Form.Group>

						<Form.Group>
							{errors.password && (
								<span className={styles.errorMessage}>
									{errors.password.message}
								</span>
							)}
							<input
								className={`form-control shadow-none ${styles.input} ${styles.passwordInput}`}
								type="password"
								{...register('password')}
								id=""
								placeholder="Password"
							/>
						</Form.Group>

						<Form.Group>
							{errors.confirmPassword && (
								<span className={styles.errorMessage}>
									{errors.confirmPassword.message}
								</span>
							)}
							<input
								className={`form-control shadow-none ${styles.input} ${styles.passwordConfirmInput}`}
								type="password"
								{...register('confirmPassword')}
								id=""
								placeholder="Confirm password"
							/>
						</Form.Group>

						<Button type="submit" className={`${styles.loginButton}`} disabled={isLoading}>
							{isLoading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
						</Button>

						<br />

						<Link href="signin">
							<p className={styles.createAccountLink}>
								Already have an account? <span>Sign In</span>
							</p>
						</Link>
					</form>
				</Row>
			</Container>
		</div>
	);
};

export default SignupComponent;
