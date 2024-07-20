'use client';

import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, InputGroup, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import styles from './_styles_components/Header.module.scss';
import { FaSearch, FaUserAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema:
const schema = yup.object().shape({
	search: yup.string().required('Search cannot be empty.'),
});



const MainNavbar = () => {
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
			<Navbar className={`${styles.navBar}`} bg="light" expand="lg">
				<Container>
					<Navbar.Brand className={styles.navBarBrand} href="/commerce">
						IVY
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link href="brands">Shop brands</Link>
							</Nav.Link>
							<Nav.Link>
								<Link href="blog">Blog</Link>
							</Nav.Link>
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
									{/* <Link href="/search"> */}
										<Button
											variant="outline-secondary"
											className={`input-group-text ${styles.searchButton}`}
											id="button-addon2"
											type='submit'
										>
											Search
										</Button>
									{/* </Link> */}
								</InputGroup>
							</Form>
						</Nav>

						<Nav className={styles.navNavigationIcons}>
							<Nav.Link className={styles.navNavigationIconsNavLink}>
								<section>
									<Link href="/wishlist">
										<FaHeart className={styles.icon} data-toggle="tooltip" data-placement="top" title="Wishlist"></FaHeart>
									</Link>
								</section>
							</Nav.Link>
							<Nav.Link className={styles.navNavigationIconsNavLink} eventKey={2}>
								<section>
									<Link href="/profile">
										<FaUserAlt className={styles.icon} data-toggle="tooltip" data-placement="top" title="Profile"></FaUserAlt>
									</Link>
								</section>
							</Nav.Link>
							<Nav.Link className={styles.navNavigationIconsNavLink} eventKey={3}>
								<section>
									<Link href="/cart">
										<FaShoppingCart className={styles.icon} data-toggle="tooltip" data-placement="top" title="Cart"></FaShoppingCart>
									</Link>
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
