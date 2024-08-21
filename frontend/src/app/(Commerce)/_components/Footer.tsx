'use client';
import { Container, Col, Row } from 'react-bootstrap';
import styles from './_styles_components/Footer.module.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ResponsiveImage from './ResponsiveImage';
import logo from './ivydalefashionmainlogo.png'

const Footer = () => {
	return (
		<div className={` ${styles.footer}`}>
			<Container>
				<Row className={``}>
					
					<Col lg={10} md={10} sm={12}>
						<Row>
							{/* COMPANY LOGO */}
							<Col lg={3} md={3} sm={12} className={styles.ivyLogoCol}>
								<div className={styles.ivyLogo}>
									<ResponsiveImage src='/IF_icon.png' 
										alt={''}
										height={120}
										width={120}>
									</ResponsiveImage>
								</div>
							</Col>

							<Col lg={3} md={3} sm={12}>
								<h4>Community</h4>
								<p>Blog</p>
								<p>Portal</p>
								<p>FAQ</p>
							</Col>

							<Col lg={3} md={3} sm={12}>
								<h4>Company</h4>
								<p>About Us</p>
								<p>Careers</p>
							</Col>

							<Col lg={3} md={3} sm={12}>
								<h4>Account</h4>
								<p>Profile</p>
								<p>Orders</p>
								<p>Returns</p>
							</Col>
						</Row>

						<hr className={styles.hr}></hr>

						<Row>
							<p>@IVYDALE 2022. We love our users!</p>
						</Row>
					</Col>

					<Col lg={2} md={2} sm={12} className={styles.socialMediaCol}>
						<Row className={styles.socialMediaRow}>
							{' '}
							<FaFacebook />
						</Row>
						<Row className={styles.socialMediaRow}>
							{' '}
							<FaInstagram> </FaInstagram>
						</Row>
						<Row className={styles.socialMediaRow}>
							{' '}
							<FaTwitter></FaTwitter>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
