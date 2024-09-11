'use client';

import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import styles from '../_styles/articleComponent.module.scss';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ResponsiveImage from '../_components/ResponsiveImage';
import { BsTwitterX } from 'react-icons/bs';


const ArticleComponent = () => {
	return (
		<Container className={styles.container}>
			<h1 className={styles.title}>What is Lorem Ipsum?</h1>
			<div className={styles.byline}>
				<span>BY DONALD MAMABOLO</span>
				<span>6 HOURS AGO</span>
				<div className={styles.socialIcons}>{/* Add social media icons here */}</div>
			</div>

			<Row>
				<Col md={8}>
				<Image
					src={`/blogimage1.jpeg`}
					alt={`Thumbnail `}
					width={400}
					height={500}
					layout="responsive"
				/>
					<div className={styles.content}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam
							malesuada bibendum arcu vitae elementum curabitur vitae. Laoreet
							suspendisse interdum consectetur libero id faucibus nisl tincidunt.
							Pulvinar etiam non quam lacus suspendisse faucibus. Morbi tincidunt
							ornare massa eget egestas purus. Nibh ipsum consequat nisl vel pretium
							lectus quam id leo. Fermentum odio eu feugiat pretium nibh. Leo vel orci
							porta non pulvinar neque.
						</p>
						{/* Add more paragraphs here */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam
							malesuada bibendum arcu vitae elementum curabitur vitae. Laoreet
							suspendisse interdum consectetur libero id faucibus nisl tincidunt.
							Pulvinar etiam non quam lacus suspendisse faucibus. Morbi tincidunt
							ornare massa eget egestas purus. Nibh ipsum consequat nisl vel pretium
							lectus quam id leo. Fermentum odio eu feugiat pretium nibh. Leo vel orci
							porta non pulvinar neque.
						</p>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam
							malesuada bibendum arcu vitae elementum curabitur vitae. Laoreet
							suspendisse interdum consectetur libero id faucibus nisl tincidunt.
							Pulvinar etiam non quam lacus suspendisse faucibus. Morbi tincidunt
							ornare massa eget egestas purus. Nibh ipsum consequat nisl vel pretium
							lectus quam id leo. Fermentum odio eu feugiat pretium nibh. Leo vel orci
							porta non pulvinar neque.
						</p>
					</div>
				</Col>
				<Col md={4}>
					<div className={styles.sidebar}>
						<div className={styles.newsletter}>
							<h2>GET THE LATEST</h2>
							<p>SIGN UP TO THE IVYDALE NEWSLETTER</p>
							<Form>
								<Form.Control
									type="text"
									placeholder="first name"
									className="mb-2"
								/>
								<Form.Control
									type="text"
									placeholder="last name"
									className="mb-2"
								/>
								<Form.Control
									type="email"
									placeholder="email address"
									className="mb-2"
								/>
								<Button variant="secondary" type="submit" className="w-100">
									SUBMIT
								</Button>
							</Form>
						</div>
						<div className={styles.ad}>Ad Space</div>
					</div>
				</Col>
			</Row>

			<div className={styles.authorBox}>
				<Image
					src="/author-placeholder.jpg"
					width={80}
					height={80}
					alt="Author"
					className={styles.authorImage}
				/>
				<div className={styles.authorInfo}>
					<h3>Daniel Jumpman</h3>
					<p>
						Hi I am the founder and developer of IvydaleFashion. I am a fulltime software developer for Macbase Software which owns Ivydalefashion. I occassionally write fashion articles for the site; usually after a new collection is released. 
					</p>
					<div className={styles.socialLinks}>
						<a
							href="https://twitter.com/authorhandle"
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsTwitterX />
						</a>
						<a
							href="https://linkedin.com/in/authorprofile"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
						<a href="mailto:author@example.com">
							<FaEnvelope />
						</a>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ArticleComponent;
