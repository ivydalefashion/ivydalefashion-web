'use client';

import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from '../_styles/signupComponent.module.scss';
import {Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";

// Schema:
const schema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup.string().required("Password is required"),
}); // end of schema

// User interface:
interface User {
	displayName: string | null;
	email: string | null;
	uid: string;
}


const SignupComponent = () => {


	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	return (
		<div>
			<Container className={`${styles.mainContainer} `}>
				<Row className={`row`}>
					<h2 className={` ${styles.primaryLabel}`}>Be a part of us.</h2>
					<label className={`${styles.secondaryLabel}`}>
						Please fill in the fields below:
					</label>
				</Row>

				<Row className={`row`}>
					<form className={` ${styles.mainForm}`}>
						<Form.Group>
							<input
								className={`form-control shadow-none ${styles.input} ${styles.firtnameInput}`}
								type="text"
								name="firstname"
								placeholder="First name"
							/>
						</Form.Group>
						<Form.Group>
							<input
								className={`form-control shadow-none ${styles.input} ${styles.lastnameInput}`}
								type="email"
								name="email"
								placeholder="Last name"
							/>
						</Form.Group>

						<Form.Group>
							<input
								className={`form-control shadow-none ${styles.input} ${styles.emailInput}`}
								type="email"
								name="email"
								id=""
								placeholder="Email address"
							/>
						</Form.Group>

						<Form.Group>
							<div className="input-group">
								<input
									className={`form-control shadow-none ${styles.input} ${styles.passwordInput}`}
									type="password"
									name="password"
									id=""
									placeholder="Password"
								/>
							</div>
						</Form.Group>

						<Form.Group>
							<div className="input-group">
								<input
									className={`form-control shadow-none ${styles.input} ${styles.passwordConfirmInput}`}
									type="password"
									name="password"
									id=""
									placeholder="Confirm password"
								/>
							</div>
						</Form.Group>

						<Button type="submit" className={`${styles.loginButton}`}>
							SIGN UP
						</Button>

						<br />

						<Link href="signup">
							<p className={styles.createAccountLink}>
								Already have an account? <span>Sign in</span>
							</p>
						</Link>
					</form>
				</Row>
			</Container>
		</div>
	);
};

export default SignupComponent;
