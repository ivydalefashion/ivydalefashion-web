'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../_styles/blogPost.module.scss'; // styling
import Image from 'next/image';

// images:
// import blogimage1 from './blogimage1.jpeg'
// import blogimage2 from './blogimage2.jpeg'
// import blogimage3 from './blogimage3.jpeg'
// import blogimage4 from './blogimage4.jpeg'
// import blogimage6 from './blogimage6.jpeg'
// import blogimage7 from './blogimage7.jpeg'
// import blogimage8 from './blogimage8.jpeg'

const BlogPostsComponent = () => {
	return (
		<div>
			<Container className={styles.titleContainer}>
				<h3> all things fashion...</h3>
			</Container>

			<Container className={styles.mainContainer}>
				<Row>
					<Col className={styles.col} sm={12} md={6} lg={4}>
						<Image
							className={styles.mainContainerImages}
							src="/blogimage1.jpeg"
							alt="Picture of the author"
							width={400}
							height={600}
						/>
						<div className={styles.intro}>
							<h1>HELLO WORLD</h1>
							<p>
								The <span>Cheeta</span> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Possimus recusandae excepturi maxime enim nisi
								harum
							</p>
						</div>
					</Col>

					<Col className={styles.col} sm={12} md={6} lg={4}>
						<Image
							className={styles.mainContainerImages}
							src="/blogimage2.jpeg"
							alt="Picture of the author"
							width={400}
							height={600}
						/>
						<div className={styles.intro}>
							<h1>HELLO WORLD</h1>
							<p>
								The <span>Cheeta</span> Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Possimus recusandae excepturi maxime enim nisi
								harum
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BlogPostsComponent;
