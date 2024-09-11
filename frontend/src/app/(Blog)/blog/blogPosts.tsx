'use client';
// pages/blog.js
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ArticleCard from './ArticleCard';

export default function BlogPage() {
	const articles = [
		{
			id: 1,
			title: 'All Things Fashion',
			excerpt: 'Explore the latest trends in street style and high fashion. Only the brave might trya and sue us for hosting up an application up onto the internet but we are legitametly the best at what we do.',
			image: '/blogimage1.jpeg',
			category: 'Fashion Trends',
		},
		{
			id: 2,
			title: 'Essential New Drop',
			excerpt: 'Discover our latest collection of must-have urban wear.',
			image: '/blogimage2.jpeg',
			category: 'New Arrivals',
		},
		{
			id: 3,
			title: 'Outerwear Essentials',
			excerpt: 'Stay stylish and warm with our curated selection of jackets.',
			image: '/blogimage3.jpeg',
			category: 'Style Guide',
		},
		{
			id: 4,
			title: 'Monochrome Magic',
			excerpt: 'Learn how to master the art of monochromatic outfits.',
			image: '/blogimage4.jpeg',
			category: 'Style Tips',
		},
		{
			id: 5,
			title: 'Streetwear Revolution',
			excerpt: 'Dive into the world of contemporary streetwear aesthetics.',
			image: '/blogimage6.jpeg',
			category: 'Fashion Culture',
		},
	];

	return (
		<Container>
			<Row xs={1} md={2} lg={3} className="g-4">
				{articles.map((article) => (
					<Col key={article.id}>
						<ArticleCard article={article} />
					</Col>
				))}
			</Row>
		</Container>
	);
}
