'use client';

import Link from 'next/link';
import { Form, Button, Container , Row, Col, InputGroup} from 'react-bootstrap';
import styles from '../_styles/signinComponent.module.scss';

const SigninComponent = () => {
	return (
		<div>
			<Container className={` ${styles.mainContainer} `}>
				<Row >
					<h2 className={` ${styles.primaryLabel}`}>Log in.</h2>
					<label className={`${styles.secondaryLabel}`}>
						Please enter your email and password
					</label>
				</Row>

				<Row>
					<form className={` ${styles.mainForm}`}>

						{/* Email input field */}
						<Form.Group>
							<input
								className={`form-control shadow-none ${styles.input} ${styles.emailInput}`}
								type="email"
								name="email"
								id=""
								placeholder="email address"
							/>
						</Form.Group>

						{/* Password input field */}
						<InputGroup className="mb-3">
							<Form.Control
								className={`form-control shadow-none ${styles.input} ${styles.passwordInput}`}
								name="password"
								type="password"
								placeholder="Enter password"
								aria-label="Password"
								aria-describedby="basic-addon2"
							/>
							<Button variant="outline-secondary" 
									className={`input-group-text ${styles.forgotPasswordButton}`}
									id="button-addon2">
								forgot password?
							</Button>
						</InputGroup>

						{/* Login button */}
						<Button type="submit" className={`${styles.loginButton}`}>
							LOGIN
						</Button>

						<br />
						
						<Link href="signup">
							<p className={styles.createAccountLink}>
								New customer? <span>Create an account</span>
							</p>
						</Link>
					</form>
				</Row>
			</Container>
		</div>
	);
};

export default SigninComponent;
