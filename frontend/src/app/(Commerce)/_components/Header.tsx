'use client';

import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, InputGroup, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import styles from './_styles_components/Header.module.scss';
import { FaSearch, FaUserAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ResponsiveImage from './ResponsiveImage';

// Schema:
const schema = yup.object().shape({
	search: yup.string().required('Search cannot be empty.'),
});

const MainNavbar = () => {
	// const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data: any) => {
		console.log(data);
		// Handle form submission here

		// router.push('/commerce');
	};

	return (
		<div>
			<Navbar className={`${styles.navBar}`} bg="light" expand="lg">
				<Container>
					<Navbar.Brand className={styles.navBarBrand} href="/commerce">
					<Image alt='' src='/mainlogo.png' width={130} height={50}>

					</Image>
						
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/brands">Shop brands</Nav.Link>
							<Nav.Link href="/blog">Blog</Nav.Link>
						</Nav>

						<Nav className="me-auto">
							<Form onSubmit={handleSubmit(onSubmit)}>
								<InputGroup className={`${styles.inputGroup}`}>
									<Form.Control
										className={`form-control shadow-none ${errors.search ? styles.errorInput : ''} ${styles.input}`}
										{...register('search')}
										type="text"
										placeholder="Search brands/..."
										aria-label="search"
										aria-describedby="basic-addon2"
									/>

									<Button
										variant="outline-secondary"
										className={`input-group-text ${styles.searchButton}`}
										id="button-addon2"
										type="submit"
									>
										Search
									</Button>
								</InputGroup>
							</Form>
						</Nav>

						<Nav className={styles.navNavigationIcons}>
							<Nav.Link href="/wishlist" className={styles.navNavigationIconsNavLink}>
								<section>
									<FaHeart
										className={styles.icon}
										data-toggle="tooltip"
										data-placement="top"
										title="Wishlist"
									></FaHeart>
								</section>
							</Nav.Link>
							<Nav.Link
								href="/profile"
								className={styles.navNavigationIconsNavLink}
								eventKey={2}
							>
								<section>
									<FaUserAlt
										className={styles.icon}
										data-toggle="tooltip"
										data-placement="top"
										title="Profile"
									></FaUserAlt>
								</section>
							</Nav.Link>
							<Nav.Link
								href="/cart"
								className={styles.navNavigationIconsNavLink}
								eventKey={3}
							>
								<section>
									<FaShoppingCart
										className={styles.icon}
										data-toggle="tooltip"
										data-placement="top"
										title="Cart"
									></FaShoppingCart>
								</section>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default MainNavbar;
