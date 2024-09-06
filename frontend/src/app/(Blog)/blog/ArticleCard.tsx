'use client';

import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ResponsiveImage from '../_components/ResponsiveImage'; // Adjust the import path as needed
import styles from '../_styles/ArticleCard.module.scss';
import Link from 'next/link';


interface Article {
	image: string;
	title: string;
	excerpt: string;
}

interface ArticleCardProps {
	article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<Card className={styles.card}>
				<div 
					className={styles.imageWrapper} 
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					>
					<ResponsiveImage
						src={article.image}
						alt={article.title}
						width={200} // Adjust this value as needed
						height={600} // Adjust this value as needed
						className={styles.responsiveImage}
					/>
				</div>

				<motion.div
					className={styles.overlay}
					initial={{ y: '100%' }}
					whileHover={{ y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Card.Body>
						<Card.Title>{article.title}</Card.Title>
						<Card.Text>{article.excerpt}</Card.Text>
					</Card.Body>
				</motion.div>
			</Card>
		</div>
	);
}
