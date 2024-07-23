'use client';

import React from 'react'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './_styles_components/blogNavbarComponent.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const BlogNavbarComponent = () => {
	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container className={styles.navbarMainContainer}>
					<Link href="/Blog">
						<BsFillArrowLeftCircleFill size={50}></BsFillArrowLeftCircleFill>
					</Link>
					<Navbar.Brand className={styles.navbarBrand}>
						<li>
							<Link className={styles.navbarBrandLink} href="/home">
								IVY
							</Link>
						</li>
					</Navbar.Brand>
					<div></div>
				</Container>
			</Navbar>
		</div>
		
	);
};

export default BlogNavbarComponent;
